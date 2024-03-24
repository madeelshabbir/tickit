import { BasePublisher, OrderCreatedEvent, Subjects } from '@tickitcore/common';

export class OrderCreatedPublisher extends BasePublisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
