import { BasePublisher, Subjects, TicketCreatedEvent } from '@tickitcore/common';

export class TicketCreatedPublisher extends BasePublisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
