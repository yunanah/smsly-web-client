<template>
  <div class="body">
    <h3>
      스무슬리!
      <br />
      <span>내 인생 브라</span>를 <span>찾아줘!</span>
    </h3>
    <div class="description">
      가슴과 취향에 대한 질문에 답하고,
      <br />
      가장 잘 맞는 속옷을 추천 받으세요.
      <br />
      <span>* 약 10분이 소요됩니다.</span>
      <br />
      <br />
      <br />
      <strong>잠시! 줄자가 필요해요.</strong>
    </div>
    <div class="container-button">
      <button @click="goToSurvey" class="btn-primary btn-48">시작하기</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    goToSurvey() {
      axios
        .put('/breastTest/startNew/new')
        .then((result) => {
          console.log(result.data);
          this.$router.push('/survey/1');
        })
        .catch(console.log);
    },
  },
};
</script>

<style lang="scss" scoped>
*:not(i):not(button):not(input[type='password']) {
  font-family: $font-main, sans-serif !important;
}
.body {
  /* z-index: 110; */
  /* margin: 20px; */
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  h3 {
    @include text-style(24, $secondary);
    margin: 120px auto 0px;
    line-height: 180%;

    @media screen and (max-width: 820px) {
      margin: 144px auto 8px;
    }

    span {
      font-weight: 700;
      color: $blue-dark;
    }
  }

  .input-group {
    margin: 8px 0;
    width: 300px;
  }

  .pw-input {
    position: relative;
    i {
      cursor: pointer;
      position: absolute;
      @include pos-center-y;
      margin-left: auto;
      left: 90%;
      font-size: 18px;
      color: $secondary;
    }
  }

  .description {
    @include text-style(16, $primary);
    margin: 16px auto 16px;
    text-align: center;
    font-weight: 600;
    line-height: 180%;

    @media screen and (max-width: 820px) {
      @include text-style(14, $primary);
    }

    span {
      color: $secondary;
      font-weight: 600;
      font-size: 14px;
      text-align: left;
    }

    strong {
      color: $red;
      font-weight: 700;
      font-size: 16px;
    }
  }

  .container-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    margin-top: 8px;
    width: 300px;
  }

  p {
    @include text-style(12, $red);
  }
}
</style>
