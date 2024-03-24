import {
  Subjects,
  BasePublisher,
  ExpirationCompleteEvent,
} from '@tickitcore/common';

export class ExpirationCompletePublisher extends BasePublisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
