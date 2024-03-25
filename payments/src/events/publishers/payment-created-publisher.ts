import { Subjects, BasePublisher, PaymentCreatedEvent } from '@tickitcore/common';

export class PaymentCreatedPublisher extends BasePublisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
