import {ParticipantModel} from '../../models/participant.model';

export abstract class TransportAbstractService {
  /**
   * Getting participant from the DB
   * @param {string} id
   * @returns {Promise<ParticipantModel>}
   */
  public abstract getParticipant(id: string): Promise<ParticipantModel>;

  /**
   * Getting participant number from the DB
   * @returns {Promise<number>}
   */
  public abstract getParticipantsNumber(): Promise<number>;

  /**
   * Getting a collection of participants
   * @returns {Promise<ParticipantModel[]>}
   */
  public abstract queryParticipants(): Promise<ParticipantModel[]>;

  /**
   * Updating the score of given participant
   * @param {string} participantId
   * @param {number} newScore
   * @returns {Promise<void>}
   */
  public abstract updateParticipantScore(participantId: string, newScore: number): Promise<void>;
}
