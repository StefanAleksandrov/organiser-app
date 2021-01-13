<template>
  <div class="home">
    <h1>Upcoming Events</h1>

    <select name="paginationCount" id="pagiCount" class="pagi">
      <option value="8">8</option>
      <option value="16">16</option>
      <option value="24">24</option>
      <option value="32">32</option>
      <option value="40">40</option>
    </select>

    <div class="event">
      <h3>Summer Vacation</h3>
      <p>Participants:</p>
      <p>Pesho, Stamat, Mariyka</p>
      <img
        src="https://media.istockphoto.com/photos/aerial-view-of-bodrum-on-turkish-riviera-picture-id628897338?k=6&m=628897338&s=612x612&w=0&h=HqbVAxryU0IbSq_SDLZ8Hbez54kaqUUZDYcHnncqk2M="
        alt="White sea picture"
      />
      <button class="event-btn">Details</button>
    </div>

    <div class="event">
      <h3>8th December</h3>
      <p>Participants:</p>
      <p>Pesho, Gosho, Mariyka</p>
      <img
        src="https://images.iphonephotographyschool.com/22122/winter-photography-10000.jpg"
        alt="Snow picture"
      />
      <button class="event-btn">Details</button>
    </div>

    <div class="event">
      <h3>New Year's Eve</h3>
      <p>Participants:</p>
      <p>Pesho, Gosho, Stamat</p>
      <img
        src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2013/06/fireworks-tips-dps-06.jpg?resize=600%2C400&ssl=1"
        alt="Fireworks picture"
      />
      <button class="event-btn">Details</button>
    </div>

    <div class="event">
      <h3>Stamat's Birthday</h3>
      <p>Participants:</p>
      <p>Pesho, Gosho, Stamat, Mariyka</p>
      <img
        src="https://www.ronniesainiphotography.com/wp-content/uploads/ocean-theme-boy-first-birthday-party-020.jpg"
        alt="Birthday cake picture"
      />
      <button class="event-btn">Details</button>
    </div>

    <div class="event">
      <h3>Maryika's Wedding</h3>
      <p>Participants:</p>
      <p>Pesho, Gosho, Stamat, Mariyka</p>
      <img
        src="https://images.squarespace-cdn.com/content/v1/512e63d6e4b0c046ed792a96/1583408232189-CR2RQ25PSP197B2MWWO5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Best_Wedding_Photographer_in+_Tuscany.jpg?format=2500w"
        alt="Birthday cake picture"
      />
      <button class="event-btn">Details</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-home",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Home */
h1 {
    margin: 0 0 25px;
    width: 93%;
    display: inline-block;
    font-size: 26px;
}

div.home .pagi {
    width: 6%;
    margin: 0;
    height: 31px;
    border-radius: 5px;
    text-align: center;
    text-align-last: center;
    -moz-text-align-last: center;
}

div.event {
    display: inline-block;
    width: 24.5%;
    height: 375px;
    padding: 0 10px;
    margin: 5px 0;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    border-radius: 10px;
}

div.event:hover {
    background-color: rgba(255, 255, 255, .35);  
}

div.event h3 {
    margin: 15px 0;
    text-align: center;
    font-size: 20px;
}

div.event p {
    text-align: center;
    margin-bottom: 15px;
}

div.event img {
    width: 100%;
    height: 200px;
    margin: 0 auto;

}

div.event button.event-btn {
    width: 100%;
    height: 30px;
    background-color: #aa6f8d;
    border: none;
    border-radius: 15px;
    outline: none;
    margin: 10px 0;
}

div.event button.event-btn:hover {
    background-color: #b47d99;
    font-weight: 700;
    cursor: pointer;
}
</style>
