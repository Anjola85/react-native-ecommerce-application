export interface TimingRequest {
  hour: number;
  minute: number;
}

export interface DayScheduleRequest {
  open: TimingRequest;
  close: TimingRequest;
}

export interface ScheduleRequest {
  monday: DayScheduleRequest;
  tuesday: DayScheduleRequest;
  wednesday: DayScheduleRequest;
  thursday: DayScheduleRequest;
  friday: DayScheduleRequest;
  saturday: DayScheduleRequest;
  sunday: DayScheduleRequest;
}
