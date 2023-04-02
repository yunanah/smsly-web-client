<template>
  <div class="body">
    <div class="progressbar-container">
      <ProgressBar :percentage="percentage" />
    </div>
    <div class="question-title">
      <h3>{{ page[0].flow_txt }}</h3>
    </div>
    <div class="question-container">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700" id="q1" class="multi-select">
        <div class="title">Q. {{ page[0].question_txt }}</div>
        <div class="answer-box">
          <button type="button" @click="setAnswer2(i)" v-for="(ans, i) in page[0].answer_options" :key="i" :class="{ selected: answer_1[i] == true }" class="image-btn answer-btn">
            <img :src="ans.path" alt="" />
            <span>{{ ans.content }}</span>
          </button>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700" id="q3" class="choose-range">
        <div class="title">Q. {{ page[1].question_txt }}</div>
        <div class="container">
          <vue-slider
            class="override"
            :tooltip-style="{ backgroundColor: '#FFD07F', borderColor: '#FFD07F' }"
            :process="process"
            railStyle="height: 20px; width: 216px;"
            v-model="value"
            :marks="marks"
            :included="true"
            :tooltip="'always'"
            :tooltip-placement="['top', 'top']"
            :tooltip-formatter="formatter"
          >
            <template v-slot:label="{ active }">
              <div :class="['vue-slider-mark-label', 'custom-label', { active }]">{{}}</div>
            </template>
          </vue-slider>
        </div>
      </div>
    </div>
    <div class="button-container">
      <div class="buttons">
        <button type="button" @click="goBack" class="btn-secondary btn-55 prev-btn">이전</button>
        <button type="button" @click="goNext" class="btn-primary btn-55 next-btn">다음</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue';
import { survey } from '../../Survey';
import axios from 'axios';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/dist-css/vue-slider-component.css';
import 'vue-slider-component/theme/default.css';

export default {
  data() {
    return {
      process: (dotsPos) => [[dotsPos[0], dotsPos[1], { backgroundColor: 'orange' }]],
      pageNum: 13,
      page: survey.page13,
      percentage: 0,
      answer_1: [false, false, false, false, false],
      answer1: null, //원하는 디자인(복수응답)
      answer2_min: 0,
      answer2_max: 300000,
      value: [0, 100],
      marks: {
        0: '0원',
        10: '1만원',
        18: '2만원',
        26: '3만원',
        34: '4만원',
        42: '5만원',
        50: '6만원',
        58: '7만원',
        66: '8만원',
        74: '9만원',
        82: '10만원',
        100: '10만원 이상',
      },
      formatter: (v) => `${this.marks[v]}`,
    };
  },
  watch: {
    value(newValue) {
      const value = {
        0: 0,
        10: 10000,
        18: 20000,
        26: 30000,
        34: 40000,
        42: 50000,
        50: 60000,
        58: 70000,
        66: 80000,
        74: 90000,
        82: 100000,
        100: 300000,
      };
      this.answer2_min = value[newValue[0]];
      this.answer2_max = value[newValue[1]];
    },
  },
  components: {
    ProgressBar,
    VueSlider,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    setAnswer2(index) {
      this.answer_1[index] = !this.answer_1[index];
      if (index === 4) {
        for (let id in this.answer_1) {
          if (Number(id) !== 4) this.answer_1[Number(id)] = false;
        }
      } else {
        this.answer_1[4] = false;
      }
      let _answer3 = '';
      this.answer_1.forEach((ans, idx) => {
        if (ans) {
          _answer3 = _answer3.concat(`${Number(this.page[0].answer_options[idx].id)},`);
        }
      });
      this.answer1 = _answer3;
    },
    goBack() {
      const answers = {
        [this.page[0].column]: this.answer1,
        [this.page[1].column[0]]: this.answer2_min,
        [this.page[1].column[1]]: this.answer2_max,
      };
      axios
        .post(`/breastTest/save/${this.pageNum}?back=yes`, answers)
        .then((result) => {
          console.log(result.data);
          if (result.data.success) {
            return this.$router.push(`/survey/${this.pageNum - 1}`);
          }
          return this.emitter.emit('showRedToast', '저장에 실패하였습니다.');
        })
        .catch(console.log);
    },
    goNext() {
      if (this.answer1 === null || this.answer2_min === null || this.answer2_max === null) {
        const questions = [this.answer1, this.answer2_min, this.answer2_max];
        for (let i = 0; i < questions.length; i++) {
          if (questions[i] === null) {
            if (i === 1 || i === 2) {
              document.getElementById('q3').scrollIntoView(false);
              break;
            } else {
              document.getElementById(`q${i}`).scrollIntoView(false);
              break;
            }
          }
        }
        return this.emitter.emit('showRedToast', '답변을 입력해주세요');
      }
      const answers = {
        [this.page[0].column]: this.answer1,
        [this.page[1].column[0]]: this.answer2_min,
        [this.page[1].column[1]]: this.answer2_max,
      };
      axios
        .post(`/breastTest/save/${this.pageNum}`, answers)
        .then((result) => {
          console.log(result.data);
          if (result.data.success) {
            return this.$router.push(`/survey/${this.pageNum + 1}`);
          }
          return this.emitter.emit('showRedToast', '저장에 실패하였습니다.');
        })
        .catch(console.log);
    },
    fetchAnswerInfo() {
      axios
        .get(`/breastTest/getData/${this.pageNum}`)
        .then((result) => {
          console.log(result.data);
          if (result.data.success) {
            //ans1
            let ans1 = result.data.record[this.page[0].column];
            this.answer1 = ans1;
            ans1 = ans1.slice(0, -1).split(',').map(Number);
            for (let idx in this.answer_1) {
              this.answer_1[Number(idx)] = false;
            }
            this.page[0].answer_options.forEach((option, idx) => {
              if (ans1.includes(option.id)) {
                this.setAnswer2(idx);
              }
            });

            //ans2
            const value = {
              0: '0',
              10000: '10',
              20000: '18',
              30000: '26',
              40000: '34',
              50000: '42',
              60000: '50',
              70000: '58',
              80000: '66',
              90000: '74',
              100000: '82',
              300000: '100',
            };
            const ans2_min = String(result.data.record[this.page[1].column[0]]);
            const ans2_max = String(result.data.record[this.page[1].column[1]]);
            if (ans2_min !== null && ans2_max !== null) {
              this.value = [value[ans2_min], value[ans2_max]];
            }
          }
        })
        .catch(console.log);
    },
    fetchProgress() {
      axios
        .get('/breastTest/getProgress')
        .then((result) => {
          console.log(result.data);
          this.percentage = result.data.Progress;
        })
        .catch(console.log);
    },
  },
  created() {
    this.fetchAnswerInfo();
    this.fetchProgress();
  },
};
</script>

<style lang="scss" scoped>
/* @import '@/styles/overrides.scss'; */
/* @use '@/styles/overrides2.scss'; */

.body {
  /* height: 240vh; */
  height: auto;
  background-color: $gray;
  display: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 100px;

  @media screen and (max-width: $md-breakpoint) {
    padding: 90px 16px;
    /* height: 1800px; */
    height: auto;
  }

  .question-container {
    margin-top: 24px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: auto;
  }

  .question-title {
    // margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      @include text-style(16, $secondary);
      text-align: center;
      width: 240px;
      // border: 2px solid $blue;
      padding: 8px 4px;
      font-weight: 500;
      border-radius: 8px;
      background-color: $white;

      @media screen and (max-width: $md-breakpoint) {
        @include text-style(14, $secondary);
        // margin-top: 8px;
      }
    }
  }

  .answer-box {
    margin: 16px;
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    /* width: 100%; */
    color: $white;

    .image-btn {
      @include text-style(16, $blue-dark);
      margin: 4px;
      width: 172px;
      height: 180px;
      /* border: 2px solid $blue-dark; */
      box-shadow: 1px 4px 4px 1px $border;
      /* background-color: #fcecdd; */
      background-color: $white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 8px;
      border-radius: 8px;

      @media screen and (max-width: $md-breakpoint) {
        width: 132px;
        height: 144px;
      }
      transition: background-color 200ms ease-in-out;

      // &:not(:disabled):hover {
      //   background-color: $blue-dark;
      //   color: $white;
      // }

      img {
        width: 120px;
        /* height: 165px; */
        border-radius: 8px;
        margin: 4px;

        @media screen and (max-width: $md-breakpoint) {
          width: 104px;
          /* height: 200px; */
        }
      }

      span {
        margin-bottom: 2px;
        font-weight: 600;
      }
    }
  }

  .multi-select,
  .short-answer,
  .choose-range {
    /* width: 80%; */
    .title {
      @include text-style(18, $white);
      /* margin-right: 16px; */
      width: 100%;
      text-align: center;
      background-color: $blue;
      color: $white;
      padding: 8px;
      font-weight: 700;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      /* margin-top: 8px; */
      @media screen and (max-width: $md-breakpoint) {
        @include text-style(18, $white);
      }
    }

    p {
      @include text-style(14, $secondary);
      padding: 12px;
    }

    background-color: $white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    margin: 32px;
    border-radius: 8px;
    box-shadow: 1px 4px 4px 1px $border;

    @media screen and (max-width: $md-breakpoint) {
      @include text-style(14, $primary);
      width: 330px;
      margin: 16px 8px;
    }

    @media screen and (max-width: 320px) {
      flex-direction: column;
      width: 300px;
      margin: 16px 8px;
      @include text-style(14, $primary);
    }
    @media screen and (max-width: 280px) {
      flex-direction: column;
      width: 260px;
      margin: 16px 4px;
      @include text-style(14, $primary);
    }

    .answer-btn {
      margin: 8px;
      width: 224px;

      @media screen and (max-width: $md-breakpoint) {
        margin: 4px;
      }
    }

    .ans-btn-s {
      width: 136px;
      margin: 8px;

      @media screen and (max-width: $md-breakpoint) {
        margin: 4px;
        width: 108px;
      }
    }

    .selected {
      /* border: 2px solid $secondary; */
      background-color: $blue-dark;
      color: white;
    }

    .input-group {
      width: 300px;
      margin: 16px 0;

      @media screen and (max-width: $md-breakpoint) {
        width: 260px;
      }

      @media screen and (max-width: 280px) {
        width: 216px;
      }
    }
  }

  .container {
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
  }

  .button-container {
    margin: 16px;
    display: flex;
    justify-content: center;

    button {
      margin: 8px;
      width: 144px;
      @media screen and (max-width: $md-breakpoint) {
        margin: 4px;
        width: 100px;
      }
    }
  }
}
</style>
