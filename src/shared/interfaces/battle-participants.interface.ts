import {ParticipantModel} from '../models/participant.model';
/**
 * Data format for the battle
 */
export interface BattleParticipantsInterface {
  participant1: ParticipantModel;
  participant2: ParticipantModel;
}
