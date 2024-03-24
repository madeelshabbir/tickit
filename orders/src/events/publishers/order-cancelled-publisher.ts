import { Subjects, BasePublisher, OrderCancelledEvent } from '@tickitcore/common';

export class OrderCancelledPublisher extends BasePublisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
