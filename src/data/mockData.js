const TYPES = { reservationTypes: ['진료', '재진', '초진', '상담'] };

const STATUS = {
  reservationStatus: ['예약', '노쇼', '완료'],
};

export const RESERVATIONDATA = [
  {
    id: 'number',
    clientName: 'string',
    type: 'string',
    date: 'date',
    startTime: 'time',
    reservationStatus: 'string',
  },
  {
    id: 'number',
    clientName: 'string',
    type: 'string',
    date: 'date',
    startTime: 'time',
    reservationStatus: 'string',
  },
  {
    id: 'number',
    clientName: 'string',
    type: 'string',
    date: 'date',
    startTime: 'time',
    reservationStatus: 'string',
  },
  {
    id: 'number',
    clientName: 'string',
    type: 'string',
    date: 'date',
    startTime: 'time',
    reservationStatus: 'string',
  },
  {
    id: 'number',
    clientName: 'string',
    type: 'string',
    date: 'date',
    startTime: 'time',
    reservationStatus: 'string',
  },
];

console.log(RESERVATIONDATA[0].reservationStatus);
