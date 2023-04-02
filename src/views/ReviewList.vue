<template>
  <div class="body">
    <div
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      class="title"
    >
      <h1>브라 리뷰하기</h1>
      <p>
        스무슬리에게 추천받은 브라 중, <br />구매한 브라가 있다면? 리뷰를
        남겨주세요!
        <br />
        <span>* 다음 추천 시 더 잘 맞는 브라를 찾을 수 있어요 :) </span>
      </p>
    </div>
    <div class="container">
      <div v-for="(bra, i) in braList" :key="i" class="review-box">
        <img :src="`/braRecommend/getImg/bra/${i + 1}`" alt="" />
        <div class="desc">
          <h3>{{ bra.braName }}</h3>
          <h4>{{ bra.brandName }}</h4>
          <!-- <button @click="moveToDetail(i)" type="button" class="btn-primary btn-48">상세페이지</button> -->
          <div class="button-box">
            <button @click="moveToDetail(i)" class="btn-secondary btn-40">
              상세 보기
            </button>
            <button
              @click="moveToReview(i)"
              type="button"
              v-if="bra.isDone === null"
              class="btn-primary btn-40"
            >
              리뷰 쓰기
            </button>
            <button
              @click="moveToReview(i)"
              type="button"
              v-else-if="bra.isDone === false"
              class="btn-primary btn-40"
            >
              작성중
            </button>
            <button
              @click="moveToReview(i)"
              type="button"
              v-else
              class="btn-outlined btn-40"
            >
              작성 완료
            </button>
          </div>
          <!-- <button
            @click="moveToDetail(i)"
            type="button"
            class="btn-primary btn-48 info"
          >
            브라 정보
          </button>
          <button
            @click="moveToReview(i)"
            type="button"
            v-if="bra.isDone === null"
            class="btn-primary btn-48 write"
          >
            리뷰 쓰기
          </button>
          <button
            @click="moveToReview(i)"
            type="button"
            v-else-if="bra.isDone === false"
            class="btn-primary btn-48 write"
          >
            작성중
          </button>
          <button
            @click="moveToReview(i)"
            type="button"
            v-else
            class="btn-outlined btn-48 write"
          >
            작성 완료
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      braList: [],
    };
  },
  methods: {
    moveToReview(id) {
      this.$router.push(`/brareview/${id + 1}`);
    },
    moveToDetail(id) {
      this.$router.push(`/survey/result/preview/${id + 1}`);
    },
    fetchReviewList() {
      axios
        .get('/review/getList')
        .then((result) => {
          console.log(result.data);
          this.braList = result.data.list;
        })
        .catch(console.log);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.fetchReviewList();
  },
  created() {},
};
</script>

<style lang="scss" scoped>
*:not(i):not(button) {
  font-family: $font-main, sans-serif !important;
  scroll-behavior: smooth;
}
.body {
  /* height: 550vh; */
  height: auto;
  background-color: $gray;
  display: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 136px 180px;

  @media screen and (max-width: $md-breakpoint) {
    padding: 80px 8px;
    /* height: 4300px; */
    height: auto;
  }

  .title {
    margin-bottom: 32px;
    h1 {
      @include text-style(24, $primary);
      font-weight: bold;
      text-align: center;
    }

    p {
      @include text-style(16, $primary);
      text-align: center;
      margin-top: 8px;

      span {
        @include text-style(14, $secondary);
        /* color: $blue-dark; */
        font-weight: 600;
      }
    }
  }

  .container {
    width: 95%;
    /* background-color: $white; */
    border-radius: 8px;
    padding: 0 30px 30px;

    @media screen and (max-width: 540px) {
      padding: 0;
    }

    .review-box {
      background-color: #fff;
      border-radius: 8px;
      max-width: 360px;
      margin: 16px auto;
      padding: 16px 16px 24px;
      box-shadow: 1px 4px 4px 1px $background;
      display: flex;
      /* align-items: center; */
      position: relative;
      img {
        width: 100px;
      }

      .desc {
        display: flex;
        flex-direction: column;
        align-items: start;
        // padding-top: 16px;
      }

      h3 {
        @include text-style(16, $primary);
        margin-left: 16px;
        display: block;
        max-width: 180px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      h4 {
        @include text-style(14, $secondary);
        margin-left: 16px;
        margin-bottom: 8px;
      }

      .button-box {
        display: flex;
        gap: 8px;
        position: absolute;
        right: 4%;
        bottom: 7%;
      }
    }
  }
}
</style>
