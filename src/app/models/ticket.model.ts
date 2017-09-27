
export class Ticket {
  constructor(
   public title: string,
   public type: string,
   public location: string,
   public customerName: string,
   public memberNumber: string,
   public date: Date,
   public description: string,
   public priority: string,
   public notes: string,
   public employeeName: string,
   public status: string

  ){}
}
