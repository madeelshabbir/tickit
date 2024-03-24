import { BasePublisher, Subjects, TicketUpdatedEvent } from '@tickitcore/common';

export class TicketUpdatedPublisher extends BasePublisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
