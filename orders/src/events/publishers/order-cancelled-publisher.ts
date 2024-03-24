import { Subjects, BasePublisher, OrderCancelledEvent } from '@tickitcore/common';

export class OrderCancelledPublisher extends BasePublisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
