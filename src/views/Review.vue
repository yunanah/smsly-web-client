<template>
  <div class="body">
    <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" class="title">
      <h1>추천 브라 리뷰</h1>
      <p>
        추천된 브라는 만족스러웠나요? <br />
        <span
          >총 <strong>{{ question.length }}</strong
          >개 문항으로, 약 5분 소요됩니다.</span
        >
      </p>
    </div>
    <div class="container">
      <div class="review">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" class="review-title">
          <h2>
            <span>{{ this.$route.params.id }}</span
            >{{ questionData.brandName }} {{ questionData.braName }}
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="this.$route.params.id === '1'" class="braimage-box">
          <img src="/braRecommend/getImg/bra/1" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="this.$route.params.id === '2'" class="braimage-box">
          <img src="/braRecommend/getImg/bra/2" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="this.$route.params.id === '3'" class="braimage-box">
          <img src="/braRecommend/getImg/bra/3" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="this.$route.params.id === '4'" class="braimage-box">
          <img src="/braRecommend/getImg/bra/4" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="this.$route.params.id === '5'" class="braimage-box">
          <img src="/braRecommend/getImg/bra/5" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="this.$route.params.id === '6'" class="braimage-box">
          <img src="/braRecommend/getImg/bra/6" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="this.$route.params.id === '7'" class="braimage-box">
          <img src="/braRecommend/getImg/bra/7" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="this.$route.params.id === '8'" class="braimage-box">
          <img src="/braRecommend/getImg/bra/8" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="this.$route.params.id === '9'" class="braimage-box">
          <img src="/braRecommend/getImg/bra/9" alt="" />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="this.$route.params.id === '10'" class="braimage-box">
          <img src="/braRecommend/getImg/bra/10" alt="" />
        </div>
        <div class="survey-container">
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="q1" class="question-container one">
            <div class="question-title">
              <h3><span>1.</span>&nbsp;{{ question[0].question_txt }}</h3>
            </div>
            <div class="input-group">
              <input type="text" class="form-input" placeholder="ex) 70A, 75AB, S, M, L" v-model="sizeInput" />
              <span class="size-valid" v-if="!isSizeValid">&nbsp;사이즈는 영문과 숫자만 입력 가능합니다.</span>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="q2" class="question-container two">
            <div class="question-title">
              <h3><span>2.</span>&nbsp;{{ question[1].question_txt }}</h3>
            </div>
            <div class="answer-box horizontal horizon-half">
              <ul>
                <li v-for="i in 5" :key="i">
                  <label :for="`fit${i}`">{{ i }}</label>
                  <input :id="`fit${i}`" type="radio" name="fit" v-model="answer[question[1].column]" :value="i" />
                </li>
              </ul>
              <p><span class="start">불만족</span><span class="end">만족</span></p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="q3" class="question-container three">
            <div class="question-title">
              <h3><span>3.</span>&nbsp;{{ question[2].question_txt }}</h3>
            </div>
            <div v-if="questionData.hookNum === null" class="sub-msg">
              <p><i class="fas fa-exclamation-circle"></i>&nbsp;앞후크 제품입니다. 다음 질문으로 이동해 주세요.</p>
            </div>
            <div v-if="questionData.hookNum !== null" class="question-image hook-image">
              <!-- 후크 개수에 따라 다른 이미지 -->
              <img v-if="questionData.hookNum == 3" src="@/assets/hookImages/hook_3.png" alt="" />
              <img v-if="questionData.hookNum == 4" src="@/assets/hookImages/hook_4.png" alt="" />
            </div>
            <div v-if="questionData.hookNum !== null" class="answer-box horizon-hook">
              <ul>
                <li v-for="i in questionData.hookNum" :key="i">
                  <input :id="`hook${i}`" type="radio" name="hook" v-model="answer[question[2].column]" :value="i" />
                  <label :for="`hook${i}`">{{ i }}</label>
                </li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="q4" class="question-container four">
            <div class="question-title">
              <h3><span>4.</span>&nbsp;{{ question[3].question_txt }}</h3>
            </div>
            <div class="answer-box horizontal">
              <ul>
                <li v-for="i in 11" :key="i">
                  <label :for="`bandpressure${i}`">{{ i - 1 }}</label>
                  <input :id="`bandpressure${i}`" type="radio" name="bandpressure" v-model="answer[question[3].column]" :value="i - 1" />
                </li>
              </ul>
              <p><span class="start">안입은 듯</span><span class="end">꽉 잡아주는</span></p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="q5" class="question-container five">
            <div class="question-title">
              <h3><span>5.</span>&nbsp;{{ question[4].question_txt }}</h3>
            </div>
            <div class="answer-box">
              <ul>
                <li v-for="i in 3" :key="i">
                  <input :id="`under-wearing${i}`" type="radio" name="under-wearing" v-model="answer[question[4].column]" :value="question[4].answer_options[i - 1].id" />
                  <label :for="`under-wearing${i}`">{{ question[4].answer_options[i - 1].content }}</label>
                </li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="q6" class="question-container six">
            <div class="question-title">
              <h3><span>6.</span>&nbsp;{{ question[5].question_txt }}</h3>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" class="options cup">
              <div class="image-box">
                <img src="@/assets/review6_1.png" alt="" />
              </div>
              <div class="answer-box">
                <h4>컵 관련</h4>
                <ul>
                  <li v-for="i in question[5].answer_options.cup.length" :key="i">
                    <input :id="`cup-complain${i}`" type="checkbox" v-model="q6" :value="question[5].answer_options.cup[i - 1].id" />
                    <label :for="`cup-complain${i}`">{{ question[5].answer_options.cup[i - 1].content }}</label>
                  </li>
                </ul>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" class="options wire">
              <div class="image-box">
                <img src="@/assets/review6_2.png" alt="" />
              </div>
              <div class="answer-box">
                <h4>와이어 관련</h4>
                <ul>
                  <li v-for="i in question[5].answer_options.wire.length" :key="i">
                    <input :id="`wire-complain${i}`" type="checkbox" v-model="q6" :value="question[5].answer_options.wire[i - 1].id" />
                    <label :for="`wire-complain${i}`">{{ question[5].answer_options.wire[i - 1].content }}</label>
                  </li>
                </ul>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" class="options under">
              <div class="image-box">
                <img src="@/assets/review6_3.png" alt="" />
              </div>
              <div class="answer-box">
                <h4>밑둘레 관련</h4>
                <ul>
                  <li v-for="i in question[5].answer_options.under.length" :key="i">
                    <input :id="`under-complain${i}`" type="checkbox" v-model="q6" :value="question[5].answer_options.under[i - 1].id" />
                    <label :for="`under-complain${i}`">{{ question[5].answer_options.under[i - 1].content }}</label>
                  </li>
                </ul>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" class="options shoulder">
              <div class="image-box">
                <img src="@/assets/review6_4.png" alt="" />
              </div>
              <div class="answer-box">
                <h4>어깨끈 관련</h4>
                <ul>
                  <li v-for="i in question[5].answer_options.shoulder.length" :key="i">
                    <input :id="`shoulder-complain${i}`" type="checkbox" v-model="q6" :value="question[5].answer_options.shoulder[i - 1].id" />
                    <label :for="`shoulder-complain${i}`">{{ question[5].answer_options.shoulder[i - 1].content }}</label>
                  </li>
                </ul>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" class="options nothing">
              <input id="nothing" type="checkbox" :value="question[5].answer_options.etc.id" v-model="q6" />
              <label for="nothing"> {{ question[5].answer_options.etc.content }}</label>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="q7" class="question-container seven">
            <div class="question-title">
              <h3><span>7.</span>&nbsp;{{ question[6].question_txt }}</h3>
            </div>
            <div class="answerboxs">
              <span class="title">가슴 보정</span>
              <div class="container">
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="braFunc[0]" class="answer-box">
                  <h4>모아주기</h4>
                  <ul>
                    <li v-for="i in question[6].answer_options[0].length" :key="i">
                      <input :id="`gather${i}`" type="radio" v-model="answer[question[6].column[0]]" :value="question[6].answer_options[0][i - 1].id" />
                      <label :for="`gather${i}`">{{ question[6].answer_options[0][i - 1].content }}</label>
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="braFunc[1]" class="answer-box">
                  <h4>올려주기</h4>
                  <ul>
                    <li v-for="i in question[6].answer_options[1].length" :key="i">
                      <input :id="`pushup${i}`" type="radio" v-model="answer[question[6].column[1]]" :value="question[6].answer_options[1][i - 1].id" />
                      <label :for="`pushup${i}`">{{ question[6].answer_options[1][i - 1].content }}</label>
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="braFunc[2]" class="answer-box">
                  <h4>받쳐주기</h4>
                  <ul>
                    <li v-for="i in question[6].answer_options[2].length" :key="i">
                      <input :id="`under${i}`" type="radio" v-model="answer[question[6].column[2]]" :value="question[6].answer_options[2][i - 1].id" />
                      <label :for="`under${i}`">{{ question[6].answer_options[2][i - 1].content }}</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="answerboxs">
              <span class="title">체형 보정</span>
              <div class="container">
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="braFunc[3]" class="answer-box">
                  <h4>부유방 보정</h4>
                  <ul>
                    <li v-for="i in question[6].answer_options[3].length" :key="i">
                      <input :id="`accBreast${i}`" type="radio" v-model="answer[question[6].column[3]]" :value="question[6].answer_options[3][i - 1].id" />
                      <label :for="`accBreast${i}`">{{ question[6].answer_options[3][i - 1].content }}</label>
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-if="braFunc[4]" class="answer-box">
                  <h4>등살 보정</h4>
                  <ul>
                    <li v-for="i in question[6].answer_options[4].length" :key="i">
                      <input :id="`accBack${i}`" type="radio" v-model="answer[question[6].column[4]]" :value="question[6].answer_options[4][i - 1].id" />
                      <label :for="`accBack${i}`">{{ question[6].answer_options[4][i - 1].content }}</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="q8" class="question-container eight">
            <div class="question-title">
              <h3><span>8.</span>&nbsp;{{ question[7].question_txt }}</h3>
            </div>
            <div class="answer-box">
              <ul>
                <li v-for="i in question[7].answer_options.length" :key="i">
                  <input :id="`quality${i}`" type="radio" v-model="answer[question[7].column]" :value="question[7].answer_options[i - 1].id" />
                  <label :for="`quality${i}`">{{ question[7].answer_options[i - 1].content }}</label>
                </li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="q9" class="question-container nine">
            <div class="question-title">
              <h3><span>9.</span>&nbsp;{{ question[8].question_txt }}</h3>
            </div>
            <div class="answer-box horizontal">
              <ul>
                <li v-for="i in 10" :key="i">
                  <label :for="`total${i}`">{{ i }}</label>
                  <input :id="`total${i}`" type="radio" name="total" v-model="answer[question[8].column]" :value="i" />
                </li>
              </ul>
              <p><span class="start">불만족</span><span class="end">만족</span></p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="q10" class="question-container ten">
            <div class="question-title">
              <h3><span>10.</span>&nbsp;{{ question[9].question_txt }}</h3>
            </div>
            <div class="answer-box">
              <ul>
                <li v-for="i in question[9].answer_options.length" :key="i">
                  <input :id="`recommend${i}`" type="radio" v-model="answer[question[9].column]" :value="question[9].answer_options[i - 1].id" />
                  <label :for="`recommend${i}`">{{ question[9].answer_options[i - 1].content }}</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="button-box">
          <div class="button">
            <button @click="submit" type="button" class="btn-primary btn-55">완료</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { reviewQuestion } from '../../reviewQuestion';
import { deleteCookie } from '@/utils/cookies';
import { validateSize } from '@/utils/validation';

export default {
  data() {
    return {
      // 앞에서 부터 '모아주기-올려주기-받쳐주기-부유방-등살'
      braFunc: [true, true, true, false, false],

      question: reviewQuestion,

      sizeInput: '',
      // isSizeValid: false,

      questionData: {
        pkItem: null,
        oldKey: null,
        brandName: null,
        braName: null,
        recommendSize: null,
        hookNum: null,
      },

      // 6번은 16개 복수선택이므로 아래 배열로
      q6: [],
      answer: {
        COMPLETE: 0,
        PK_ITEM: '',
        OLD_KEY: '',
        PK_SIZE: '',

        [reviewQuestion[0].column]: this.sizeInput, //BRA_SIZE

        [reviewQuestion[1].column]: null, //FIT
        [reviewQuestion[2].column]: null, //HOOK
        [reviewQuestion[3].column]: null, //BAND_PRESSURE
        [reviewQuestion[4].column]: null, //BAND_FIT

        [reviewQuestion[5].column]: null, //UNCOM_DETAIL

        [reviewQuestion[6].column[0]]: null, //SATIS_GATHER, 123
        [reviewQuestion[6].column[1]]: null, //SATIS_PUSHUP, 123
        [reviewQuestion[6].column[2]]: null, //SATIS_SURGE, 123
        [reviewQuestion[6].column[3]]: null, //SATIS_ACCBREAST, 12
        [reviewQuestion[6].column[4]]: null, //SATIS_ACCBACK, 12

        [reviewQuestion[7].column]: null, //QUALITY
        [reviewQuestion[8].column]: null, //TOTAL_SCORE
        [reviewQuestion[9].column]: null, //RECOMMEND
      },
    };
  },
  computed: {
    isSizeValid() {
      console.log(validateSize(this.sizeInput));
      return validateSize(this.sizeInput);
    },
  },
  watch: {
    answer: {
      deep: true,
      handler(newVal) {
        this.answer.PK_SIZE = this.answer.PK_ITEM.slice(0, 2) + newVal[reviewQuestion[0].column];
      },
    },
    q6: {
      deep: true,
      handler(newVal) {
        console.log(newVal);
        this.answer.UNCOM_DETAIL = '';
        let stringArrq6 = newVal;
        let numArrq6 = stringArrq6.map((col) => Number(col));
        console.log(numArrq6);
        if (numArrq6.length > 1 && numArrq6[numArrq6.length - 1] === 0) {
          return (this.q6 = ['0']);
        }
        if (numArrq6.length > 1 && numArrq6[0] === 0) {
          numArrq6.splice(0, 1);
          stringArrq6 = numArrq6.map((col) => String(col));
          return (this.q6 = stringArrq6);
        }
        numArrq6.sort((a, b) => {
          return a - b;
        });
        numArrq6.forEach((col) => {
          this.answer.UNCOM_DETAIL += col + ',';
        });
        console.log(this.answer.UNCOM_DETAIL);
      },
    },
  },
  methods: {
    fetchQuestionData() {
      axios
        .get(`/review/getQuestionData/${this.$route.params.id}`)
        .then((result) => {
          console.log(result.data);
          if (result.data.success) {
            this.braFunc = result.data.braFunc;
            this.questionData = result.data.questionData;
            this.answer.PK_ITEM = result.data.questionData.pkItem;
            this.answer.OLD_KEY = result.data.questionData.oldKey;
            this.fetchReviewData();
          } else {
            if (Object.keys(result.data).includes('isAuth') && result.data.isAuth === false) {
              this.$store.commit('clearToken');
              deleteCookie('auth');
              console.log('여기 로직 리팩토링');
              this.$router.push('/');
              this.emitter.emit('loginModal', true);
              this.emitter.emit('showRedToast', '로그인 후 이용해주세요.');
              return;
            }
            console.log(result.data.message);
            return this.emitter.emit('showRedToast', result.data.message);
          }
        })
        .catch(console.log);
    },
    fetchReviewData() {
      axios
        .get(`/review/getReviewData/${this.$route.params.id}`)
        .then((result) => {
          console.log(result.data);
          if (result.data.success) {
            this.answer = result.data.braReview;
            let q6 = result.data.braReview.UNCOM_DETAIL.slice(0, -1).split(',');
            this.q6 = q6;
            // this.isCompleted1 = true;
            return;
          }
        })
        .catch(console.log);
    },
    submit() {
      console.log(this.answer);
      const questions = [this.answer.BRA_SIZE, this.answer.FIT, this.answer.HOOK, this.answer.BAND_PRESSURE, this.answer.BAND_FIT, this.answer.UNCOM_DETAIL, true, this.answer.QUALITY, this.answer.TOTAL_SCORE, this.answer.RECOMMEND];
      for (let i = 0; i < questions.length; i++) {
        if (i === 6) {
          console.log(this.braFunc);
          if (this.answer.SATIS_GATHER === null || this.answer.SATIS_PUSHUP === null || this.answer.SATIS_SURGE === null || (this.braFunc[3] && this.answer.SATIS_ACCBREAST === null) || (this.braFunc[4] && this.answer.SATIS_ACCBACK === null)) {
            document.getElementById('q7').scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center',
            });
            return this.emitter.emit('showRedToast', '7번 문항에 입력하지 않은 항목이 있습니다.');
          }
        }
        if (questions[i] === null) {
          document.getElementById(`q${i + 1}`).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          });
          return this.emitter.emit('showRedToast', `${i + 1}번 문항을 입력해주세요.`);
        }
      }
      this.answer.COMPLETE = 1;
      axios
        .post(`/review/save/${this.$route.params.id}`, this.answer)
        .then((result) => {
          console.log(result.data);
          if (result.data.success) {
            window.scrollTo(0, 0);
            this.fetchReviewData();
            this.emitter.emit('showToast', result.data.message);
            this.$router.push('/brareview/list');
            return;
          } else {
            this.emitter.emit('showRedToast', result.data.message);
          }
        })
        .catch(console.log);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    this.fetchQuestionData();
  },
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
  padding: 120px 180px;

  @media screen and (max-width: $md-breakpoint) {
    padding: 80px 8px;
    /* height: 4300px; */
    height: auto;
  }

  .title {
    // margin-bottom: 32px;
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
        strong {
          color: $blue-dark;
          font-weight: 600;
        }
      }
    }
  }

  .container {
    width: 95%;
    /* background-color: $white; */
    border-radius: 8px;

    .comment {
      p {
        @include text-style(16, $red);
        text-align: center;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;

        span {
          @include text-style(16, $secondary);
          font-weight: 500;
          text-decoration: underline;

          &:hover {
            color: $tertiary;
          }
        }
      }
      .complete-review {
        color: $green;
        span {
          cursor: pointer;
        }

        @media screen and (max-width: 280px) {
          display: flex;
          flex-direction: column;
        }
      }
    }

    .selection {
      display: flex;
      justify-content: center;
      background-color: $white;
      border-radius: 8px;
      padding: 8px;
      align-items: center;

      .option {
        /* flex-grow: 1; */
        margin: 8px;
        display: flex;
        flex-direction: column;
        position: relative;
        cursor: pointer;

        @media screen and (max-width: $md-breakpoint) {
          margin: 2px;
        }

        p {
          @include text-style(18, $blue);
          font-weight: bolder;
          position: absolute;
          text-align: center;
          width: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          @media screen and (max-width: $md-breakpoint) {
            @include text-style(13, $blue);
          }
        }

        .completed {
          @include text-style(16);
          color: $blue-dark;
          // color: $red;
          font-weight: bold;
          opacity: 0.8;

          @media screen and (max-width: $md-breakpoint) {
            @include text-style(14);
          }
        }

        .mouseOn {
          opacity: 0.5;
        }

        .clicked {
          opacity: 0.5;
        }

        span {
          @include text-style(16);
          background-color: $blue;
          color: $white;
          width: 22px;
          padding: 0px 6px;
          border-radius: 50%;
          position: absolute;
          right: 1;
          margin: 4px;
          /* bottom: ; */

          @media screen and (max-width: $md-breakpoint) {
            @include text-style(14);
            width: 20px;
            padding: 0px 6px;
            padding-bottom: 16px;
            height: 22px;
          }
        }

        img {
          /* width: 150px; */
          width: 100%;
          border-radius: 8px;
          box-shadow: 1px 4px 4px 1px $border;
          /* @media screen and (max-width: $md-breakpoint) {
												/* width: 72px; */
          /* width: 100%;
										} */
        }
      }
    }

    .review {
      background-color: $white;
      border-radius: 8px;
      margin-top: 16px;
      padding: 30px 100px;
      @media screen and (max-width: 1031px) {
        padding: 30px 8px;
      }

      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .review-title {
        width: 100%;
        display: flex;
        justify-content: center;
        h2 {
          @include text-style(18, $primary);
          font-weight: bold;
          margin-bottom: 8px;

          @media screen and (min-width: 281px) {
            padding: 0 24px;
            text-align: center;
          }

          span {
            @include text-style(16);
            background-color: $blue;
            color: $white;
            width: 22px;
            padding: 2px 6px;
            border-radius: 50%;
            /* position: absolute;
												right: 1; */
            margin: 4px;
            /* bottom: ; */

            @media screen and (max-width: $md-breakpoint) {
              @include text-style(14);
              width: 20px;
              padding: 2px 6px;
              /* padding-bottom: 16px; */
              height: 22px;
            }
          }
        }
      }

      .braimage-box {
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          width: 300px;
          border-radius: 8px;
          box-shadow: 1px 2px 2px 1px $border;

          @media screen and (max-width: $md-breakpoint) {
            width: 256px;
          }

          @media screen and (max-width: 280px) {
            width: 200px;
          }
        }
      }

      .survey-container {
        width: 100%;

        .question-container {
          margin: 64px 0;
          padding-left: 32px;
          padding-right: 32px;
          @media screen and (max-width: 768px) {
            padding-left: 4px;
            padding-right: 4px;
          }

          .question-title {
            @include text-style(16, $primary);
            margin-bottom: 16px;

            @media screen and (max-width: $md-breakpoint) {
              @include text-style(14, $primary);
            }
          }

          .hook-image {
            display: flex;
            justify-content: center;

            img {
              width: 300px;
              @media screen and (max-width: $md-breakpoint) {
                width: 256px;
                margin-bottom: 16px;
              }

              @media screen and (max-width: 280px) {
                width: 216px;
              }
            }
          }

          .answer-box {
            margin-bottom: 16px;

            ul {
              li {
                display: flex;
                margin: 8px;
                flex-wrap: wrap;
                @media screen and (max-width: $md-breakpoint) {
                  margin: 2px;
                }

                @media screen and (max-width: 320px) {
                  margin: 1px;
                }

                label {
                  @include text-style(16, $primary);

                  @media screen and (max-width: $md-breakpoint) {
                    @include text-style(14, $primary);
                  }
                }
              }
            }
          }

          .options {
            display: flex;
            align-items: center;

            @media screen and (max-width: $md-breakpoint) {
              margin-bottom: 16px;
            }
            // @media screen and (max-width: 280px) {
            //   flex-direction: column;
            // }

            .image-box {
              img {
                width: 200px;
              }
            }
          }

          .nothing {
            margin-left: 32px;
          }

          .cup,
          .wire,
          .under,
          .shoulder,
          .others {
            /* @media screen and (max-width: $md-breakpoint) {
														margin-bottom: 8px;
												} */

            .image-box {
              img {
                width: 100px;
                margin-right: 16px;
                @media screen and (max-width: $md-breakpoint) {
                  margin-right: 4px;
                }
                @media screen and (max-width: 280px) {
                  width: 64px;
                }
              }
            }
          }
        }

        .one,
        .two,
        .three,
        .five,
        .six,
        .seven,
        .eight,
        .ten,
        .eleven {
          @media screen and (max-width: $md-breakpoint) {
            margin: 64px 0;
            margin-left: 8px;
          }
        }

        .three,
        .seven {
          .sub-msg {
            @include text-style(14, $red);
            margin: 16px;
          }
        }

        .one {
          .message {
            @include text-style(14, $red);
            margin-left: 8px;
            margin-right: 8px;
          }

          .input-group {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            input {
              width: 75%;
            }
            span {
              @include text-style(13, $red);
              margin: 2px;
            }
          }
        }

        /*.three {
          .horizon-hook {
            display: flex;
            display: flex;
            display: flex;
          }
        }*/

        .six {
          .answer-box {
            h4 {
              @include text-style(16, $blue-dark);
              font-weight: bold;
              margin-bottom: 4px;
              margin-left: 4px;
            }
          }
        }

        .seven {
          display: flex;
          justify-content: center;
          flex-direction: column;
          .answerboxs {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .title {
              @include text-style(14, $secondary);
              margin-bottom: 8px;
              font-weight: 600;
              text-align: center;
            }

            .container {
              display: flex;
              width: 100%;
              justify-content: center;
              flex-wrap: wrap;

              @media screen and (max-width: 820px) {
                justify-content: flex-start;
                flex-wrap: wrap;
                padding: 0;
                margin: 0;
              }
            }
            .answer-box {
              margin-bottom: 16px;
              margin-right: 8px;
              background-color: $background;
              padding: 8px;
              border-radius: 8px;
              width: 180px;

              @media screen and (max-width: $md-breakpoint) {
                width: 140px;
              }

              @media screen and (max-width: 360px) {
                display: flex;
                flex-direction: column;
                justify-content: center;

                width: 132px;
                margin-right: 4px;
                padding: 4px;
              }

              h4 {
                @include text-style(16, $blue-dark);
                font-weight: bold;
                margin-bottom: 8px;
                margin-left: 8px;
              }
            }
          }
        }

        .horizontal {
          display: flex;
          align-items: center;
          flex-direction: column;

          margin: 0 0px;

          p {
            position: relative;
            width: 400px;

            @media screen and (max-width: 1000px) {
              width: 270px;
            }

            @media screen and (max-width: 280px) {
              width: 224px;
            }

            .start {
              @include text-style(14, $blue-dark);
              font-weight: bolder;
              position: absolute;
              left: 0;
            }

            .end {
              @include text-style(14, $blue-dark);
              font-weight: bolder;
              position: absolute;
              right: 0;
            }
          }

          ul {
            list-style: none;
            /* margin-right: 4px; */
          }
          li {
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            label {
              @include text-style(13, $primary);
              text-align: center;
              /* height: 24px; */
            }
          }
        }

        .horizon-half {
          p {
            position: relative;
            width: 200px;

            @media screen and (max-width: 1000px) {
              width: 135px;
            }

            @media screen and (max-width: 280px) {
              width: 112px;
            }

            .start {
              @include text-style(14, $blue-dark);
              font-weight: bolder;
              position: absolute;
              left: 0;
            }

            .end {
              @include text-style(14, $blue-dark);
              font-weight: bolder;
              position: absolute;
              right: 0;
            }
          }
        }
      }

      .button-box {
        width: 100%;

        .button {
          display: flex;
          margin: 8px;
          justify-content: center;

          button {
            width: 256px;
          }
        }
      }
    }
  }

  /* checkbox, radiobutton custom */
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    input[type='checkbox'],
    input[type='radio'] {
      --active: #feba27;
      --active-inner: #fff;
      --focus: 2px rgba(221, 139, 16, 0.3);
      --border: #bbc1e1;
      --border-hover: #e49825;
      --background: #fff;
      --disabled: #f6f8ff;
      --disabled-inner: #e1e6f9;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 21px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 0;
      cursor: pointer;
      border: 1px solid var(--bc, var(--border));
      background: var(--b, var(--background));
      transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
      &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        position: absolute;
        transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
      }
      &:checked {
        --b: var(--active);
        --bc: var(--active);
        --d-o: 0.3s;
        --d-t: 0.6s;
        --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
      }
      &:disabled {
        --b: var(--disabled);
        cursor: not-allowed;
        opacity: 0.9;
        &:checked {
          --b: var(--disabled-inner);
          --bc: var(--border);
        }
        & + label {
          cursor: not-allowed;
        }
      }
      &:hover {
        &:not(:checked) {
          &:not(:disabled) {
            --bc: var(--border-hover);
          }
        }
      }
      &:focus {
        box-shadow: 0 0 0 var(--focus);
      }
      &:not(.switch) {
        width: 21px;
        &:after {
          opacity: var(--o, 0);
        }
        &:checked {
          --o: 1;
        }
      }
      & + label {
        font-size: 14px;
        line-height: 21px;
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
        margin-left: 4px;
      }
    }
    input[type='checkbox'] {
      &:not(.switch) {
        border-radius: 7px;
        &:after {
          width: 5px;
          height: 9px;
          border: 2px solid var(--active-inner);
          border-top: 0;
          border-left: 0;
          left: 7px;
          top: 4px;
          transform: rotate(var(--r, 20deg));
        }
        &:checked {
          --r: 43deg;
        }
      }
      &.switch {
        width: 38px;
        border-radius: 11px;
        &:after {
          left: 2px;
          top: 2px;
          border-radius: 50%;
          width: 15px;
          height: 15px;
          background: var(--ab, var(--border));
          transform: translateX(var(--x, 0));
        }
        &:checked {
          --ab: var(--active-inner);
          --x: 17px;
        }
        &:disabled {
          &:not(:checked) {
            &:after {
              opacity: 0.6;
            }
          }
        }
      }
    }
    input[type='radio'] {
      border-radius: 50%;
      &:after {
        width: 19px;
        height: 19px;
        border-radius: 50%;
        background: var(--active-inner);
        opacity: 0;
        transform: scale(var(--s, 0.7));
      }
      &:checked {
        --s: 0.5;
      }
    }
  }

  /* 
		ul {
		margin: 12px;
		padding: 0;
		list-style: none;
		width: 100%;
		max-width: 320px;
      li {
        margin: 16px 0;
        position: relative;
      }
		} */

  * {
    box-sizing: inherit;
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
  /* checkbox, radiobutton custom end */

  input[type='checkbox'],
  input[type='radio'] {
    & + label {
      @include text-style(16, $primary);

      @media screen and (max-width: $md-breakpoint) {
        @include text-style(14, $primary);
      }
    }
  }
}
</style>
