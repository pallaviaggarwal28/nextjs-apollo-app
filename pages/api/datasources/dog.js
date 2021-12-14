const { RESTDataSource } = require("apollo-datasource-rest");

class DogAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://dog.ceo/api/";
  }

  async getImagesByBreed({ breed }) {
    const response = await this.get(`/breed/${breed}/images`);
    return { urls: response.message || [] };
  }

  async getImagesByBreedAndSubBreed({ breed, subBreed }) {
    const response = await this.get(`/breed/${breed}/${subBreed}/images`);
    return { message: response.message || [] };
  }

  async getSubBreedsByBreed({ breed }) {
    const response = await this.get(`/breed/${breed}/list`);
    return response.message;
  }

  async getAllBreeds() {
    const response = await this.get("breeds/list/all");
    const data = response.message;
    return Promise.all(
      Object.keys(data).map(async key => {
        return {
          name: key,
          area: data[key]
        };
      })
    );
  }

  async getDog({ breed }) {
    const images = await this.getImagesByBreed({ breed });
    const subBreeds = await this.getSubBreedsByBreed({ breed });
    return {
      breed,
      images,
      subBreeds: subBreeds
    };
  }
}

module.exports = DogAPI;
