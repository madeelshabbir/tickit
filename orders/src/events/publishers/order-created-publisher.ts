import { BasePublisher, OrderCreatedEvent, Subjects } from '@tickitcore/common';

export class OrderCreatedPublisher extends BasePublisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
