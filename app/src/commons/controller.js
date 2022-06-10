class Controller {
  constructor(repository) {
    this.repository = repository
  }

  async findAll() {
    return await this.repository.findAll()
  }
  async findOne() {
    return this.repository.findOne()
  }
  async createOne() {
    this.repository.createOne()
  }

  async updateOne() {
    this.repository.updateOne()
  }

  async deleteOne() {
    this.repository.deleteOne()
  }

}

export default Controller