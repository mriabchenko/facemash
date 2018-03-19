import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {BattleParticipantsInterface} from '../../shared/interfaces/battle-participants.interface';
import {Subject} from 'rxjs/Subject';
import {BattleModel} from '../../shared/models/battle.model';
import {RatingService} from '../../shared/services/rating.service';
import {TransportService} from '../../shared/services/transport/transport.service';
import {HelperService} from '../../shared/services/helper.service';
import {CompareResult} from '../../shared/enums/compare-result.enum';

@Component({
  selector: 'app-page-compare',
  templateUrl: 'compare.html'
})
  export class ComparePageComponent implements OnInit {
    public participants$: BehaviorSubject<BattleParticipantsInterface> | null;
    public battles$: Subject<BattleModel>;

    public constructor(public navCtrl: NavController,
        public rating: RatingService,
                       public transport: TransportService,
                       public helper: HelperService) {
        this.battles$ = new Subject<BattleModel>();
        this.participants$ = new BehaviorSubject<BattleParticipantsInterface>(null);
    }

    public ngOnInit() {
        this.battles$.subscribe((result: BattleModel) => {
            let participant1id: string,
                participant2id: string,
                participant1Rating: number,
                participant2Rating: number,
                participant1newRating: number,
                participant2newRating: number;

            participant1id = result.participants.participant1.id;
            participant2id = result.participants.participant2.id;
            participant1Rating = result.participants.participant1.score;
            participant2Rating = result.participants.participant2.score;
            // calculating new rating
            switch (result.participant1result) {
                case CompareResult.win:
                    participant1newRating = this.rating.getNewScore(participant1Rating, participant2Rating, CompareResult.win);
                    participant2newRating = this.rating.getNewScore(participant2Rating, participant1Rating, CompareResult.lose);
                    break;
                case CompareResult.lose:
                    participant1newRating = this.rating.getNewScore(participant1Rating, participant2Rating, CompareResult.lose);
                    participant2newRating = this.rating.getNewScore(participant2Rating, participant1Rating, CompareResult.win);
                    break;
                default:
                    participant1newRating = participant1Rating;
                    participant2newRating = participant2Rating;
                    break;
            }
            // testing rating change
            // console.log(`1: ${participant1Rating} -> ${participant1newRating}`);
            // console.log(`2: ${participant2Rating} -> ${participant2newRating}`);
            this.transport.updateParticipantScore(participant1id, participant1newRating);
            this.transport.updateParticipantScore(participant2id, participant2newRating);
        });
    }

    /**
     * Doing battle after user selected a winner
     * @param participant1result
     */
    public battle(participant1result): void {
        const battleResult = new BattleModel(this.participants$.value, participant1result);
        this.battles$.next(battleResult);
    }

    public nextBattle(): void {
        const twoRandomNumbers = this.helper.getTwoRandomNumbers(this.transport.getParticipantsNumber().value);
        this.participants$.next({
            participant1: this.transport.getParticipants().value[twoRandomNumbers[0]],
            participant2: this.transport.getParticipants().value[twoRandomNumbers[1]],
        });
    }

    /**
     * Begins first battle
     */
    private beginFirstBattle(): void {
        this.nextBattle();
    }
}
