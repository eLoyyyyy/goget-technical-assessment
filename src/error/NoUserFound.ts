export class NoUserFound extends Error {
  constructor(id: any) {
    super(id)

    this.name = this.constructor.name
    Object.setPrototypeOf(this, NoUserFound.prototype)
  }
}
