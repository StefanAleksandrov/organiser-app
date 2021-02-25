<template>
  <div class="home">
    <h1 class="main-heading">Upcoming Events</h1>
    <event :events="events"></event>
  </div>
</template>

<script>
import Event from "../events/Event";

export default {
  name: "page-home",

  components: {
    Event,
  },

  data() {
    return {
      events: [
        {
          id: 501394619,
          name: "Maryika's Wedding",
          participants: ["Pesho", "Gosho", "Stamat", "Mariyka"],
          imgUrl:
            "https://images.squarespace-cdn.com/content/v1/512e63d6e4b0c046ed792a96/1583408232189-CR2RQ25PSP197B2MWWO5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Best_Wedding_Photographer_in+_Tuscany.jpg?format=2500w",
          imgAlt: "Wedding picture",
          isPublic: true,
          creator: 'userID',
          createdAt: new Date(),
        },
        {
          id: 914632584,
          name: "Stamat's Birthday",
          participants: ["Pesho", "Gosho", "Stamat", "Mariyka"],
          imgUrl:
            "https://www.ronniesainiphotography.com/wp-content/uploads/ocean-theme-boy-first-birthday-party-020.jpg",
          imgAlt: "Birthday cake picture",
          isPublic: true,
          creator: 'userID',
          createdAt: new Date(),
        },
        {
          id: 645946872,
          name: "New Year's Eve",
          participants: ["Pesho", "Gosho", "Stamat"],
          imgUrl:
            "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/fireworks-tips-dps-06.jpg?resize=600%2C400&ssl=1",
          imgAlt: "Fireworks picture",
          isPublic: true,
          creator: 'userID',
          createdAt: new Date(),
        },
        {
          id: 767429763,
          name: "8th December",
          participants: ["Pesho", "Gosho", "Mariyka"],
          imgUrl:
            "https://images.iphonephotographyschool.com/22122/winter-photography-10000.jpg",
          imgAlt: "Snow picture",
          isPublic: true,
          creator: 'userID',
          createdAt: new Date(),
        },
        {
          id: 123654128,
          name: "Summer Vacation",
          participants: ["Pesho", "Stamat", "Mariyka"],
          imgUrl:
            "https://media.istockphoto.com/photos/aerial-view-of-bodrum-on-turkish-riviera-picture-id628897338?k=6&m=628897338&s=612x612&w=0&h=HqbVAxryU0IbSq_SDLZ8Hbez54kaqUUZDYcHnncqk2M=",
          imgAlt: "White sea picture",
          isPublic: true,
          creator: 'userID',
          createdAt: new Date(),
        },
      ],
    };
  },

};
</script>

<style scoped>
</style>
