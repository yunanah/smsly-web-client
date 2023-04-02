<template>
  <div class="container-box">
    <div class="header">
      <!-- 뒤로가기 버튼, 타이틀 -->
      <div @click="this.$router.push('/survey/result/preview/0') && this.emitter.emit('seeBasicView', false)" class="goback"><i class="fas fa-chevron-left"></i>&nbsp;<span>뒤로가기</span></div>
      <h2>제품 상세 보기</h2>
    </div>
    <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="900" class="bra-info">
      <div class="image-box">
        <div v-if="index == 0" class="image-box">
          <img src="/braRecommend/getImg/bra/1" alt="" />
        </div>
        <div v-if="index == 1" class="image-box">
          <img src="/braRecommend/getImg/bra/2" alt="" />
        </div>
        <div v-if="index == 2" class="image-box">
          <img src="/braRecommend/getImg/bra/3" alt="" />
        </div>
        <div v-if="index == 3" class="image-box">
          <img src="/braRecommend/getImg/bra/4" alt="" />
        </div>
        <div v-if="index == 4" class="image-box">
          <img src="/braRecommend/getImg/bra/5" alt="" />
        </div>
        <div v-if="index == 5" class="image-box">
          <img src="/braRecommend/getImg/bra/6" alt="" />
        </div>
        <div v-if="index == 6" class="image-box">
          <img src="/braRecommend/getImg/bra/7" alt="" />
        </div>
        <div v-if="index == 7" class="image-box">
          <img src="/braRecommend/getImg/bra/8" alt="" />
        </div>
        <div v-if="index == 8" class="image-box">
          <img src="/braRecommend/getImg/bra/9" alt="" />
        </div>
        <div v-if="index == 9" class="image-box">
          <img src="/braRecommend/getImg/bra/10" alt="" />
        </div>
      </div>
      <div class="bra-name">
        <!-- 제품 이름 -->
        <h3>{{ braDetails[index].braInfo.braName }}</h3>
        <div class="tags">
          <p class="title">제품 특징</p>
          <span>{{ braDetails[index].braInfo.tagsCha ? braDetails[index].braInfo.tagsCha.join(' / ') : '없음' }}</span>
        </div>
        <div class="tags">
          <p class="title">보유 기능</p>
          <span>{{ braDetails[index].braInfo.tagsEff ? braDetails[index].braInfo.tagsEff.join(' / ') : '없음' }}</span>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="900" class="details">
      <table>
        <tr>
          <th>브랜드</th>
          <td>{{ braDetails[index].braInfo.brandName }}</td>
        </tr>
        <tr>
          <th>가격</th>
          <td>{{ braDetails[index].braInfo.price }} 원</td>
        </tr>
        <tr>
          <th>추천 사이즈</th>
          <td>
            <span v-if="braDetails[index].braInfo.sizeType === 0">{{ braDetails[index].braInfo.generalSize }}</span>
            <span v-else-if="braDetails[index].braInfo.sizeType === 1">{{ braDetails[index].braInfo.generalSize }}O&nbsp;{{ braDetails[index].braInfo.braSize }}X</span>
            <span v-else-if="braDetails[index].braInfo.sizeType === 2">{{ braDetails[index].braInfo.generalSize }}X&nbsp;{{ braDetails[index].braInfo.braSize }}O</span>
            <span v-else-if="braDetails[index].braInfo.sizeType === 3">{{ braDetails[index].braInfo.generalSize }}O&nbsp;{{ braDetails[index].braInfo.braSize }}O</span>
          </td>
        </tr>
      </table>
    </div>
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="900" id="links" class="purchase-links">
      <div class="purchase-links-title">
        <h3>구매 링크</h3>
      </div>

      <div class="contents">
        <button class="btn-outlined btn-48" v-for="(link, i) in braDetails[index].braInfo.link" :key="i">
          <a :href="link" target="_blank">{{ braDetails[index].braInfo.color.length === braDetails[index].braInfo.link.length ? braDetails[index].braInfo.color[i] : braDetails[index].braInfo.color.join().replaceAll(',', ', ') }} 구매링크</a>
        </button>
        <div class="before-purchase">
          <p>
            구매하기 전 잠깐!<br />
            아무리 맞는 사이즈를 입어도<br />
            착용법이 올바르지 않으면, <br />
            안 맞는 것 처럼 느껴질 수 있어요! <br />
            <br />
            그런 불상사를 막기 위해, 영상을 준비했어요 :)
          </p>
          <div class="button-box">
            <button type="button" class="btn-primary btn-40">
              <a target="_blank" href="https://discreet-puck-4be.notion.site/f9672e96846d460c82aa48a6cb273b25">올바른 브라 착용법</a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="func-fit">
      <div class="func-fit-title">
        <h3>{{ userName }}님과의 <span>기능 적합도</span> 분석&nbsp;</h3>
        <i class="far fa-check-square"></i>
      </div>
      <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="900" class="func-fit-graph">
        <div class="graph-box">
          <canvas id="myChart" width="300" height="300"></canvas>
        </div>
        <div class="graph-values">
          <div class="value">
            <h5><i class="fas fa-caret-right"></i>&nbsp;&nbsp;{{ braDetails[index].funcMatch.bigger[1] }}</h5>
          </div>
          <div class="value">
            <h5><i class="fas fa-caret-right"></i>&nbsp;&nbsp;{{ braDetails[index].funcMatch.gather[1] }}</h5>
          </div>
          <div class="value">
            <h5><i class="fas fa-caret-right"></i>&nbsp;&nbsp;{{ braDetails[index].funcMatch.pushup[1] }}</h5>
          </div>
          <div class="value">
            <h5><i class="fas fa-caret-right"></i>&nbsp;&nbsp;{{ braDetails[index].funcMatch.under[1] }}</h5>
          </div>
          <div class="value">
            <h5><i class="fas fa-caret-right"></i>&nbsp;&nbsp;{{ braDetails[index].funcMatch.accBreast[1] }}</h5>
          </div>
          <div class="value">
            <h5><i class="fas fa-caret-right"></i>&nbsp;&nbsp;{{ braDetails[index].funcMatch.accBack[1] }}</h5>
          </div>
        </div>
      </div>
      <div class="func-why-description">
        <div class="description-title">
          <h4>이 브라는 왜 이런 기능을 가질까?</h4>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="900" v-if="braDetails[index].funcMatch.cupShape != null" class="cup-shape">
          <div class="key-word">
            <h5><i class="far fa-check-circle"></i>&nbsp;{{ braDetails[index].funcMatch.cupShape.title }}</h5>
          </div>
          <div class="box">
            <div class="image-box">
              <img src="@/assets/bra_details/full_cup.png" alt="" />
            </div>
            <div class="description">
              <div class="contents">
                <p>{{ braDetails[index].funcMatch.cupShape.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="900" v-if="braDetails[index].funcMatch.cover !== null" class="cover">
          <div class="key-word">
            <h5><i class="far fa-check-circle"></i>&nbsp;{{ braDetails[index].funcMatch.cover.title }}</h5>
          </div>
          <div class="box">
            <div class="image-box">
              <img src="@/assets/bra_details/upper_cup.png" alt="" />
            </div>
            <div class="description">
              <div class="contents">
                <p>{{ braDetails[index].funcMatch.cover.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="900" class="bbong">
          <div class="key-word">
            <h5><i class="far fa-check-circle"></i>&nbsp;{{ braDetails[index].funcMatch.bbong.title }}</h5>
          </div>
          <div class="rep-description" v-if="braDetails[index].funcMatch.bbong.value">
            <table>
              <tr>
                <th><span>내장형 두께</span></th>
                <th><span>탈부착형 두께</span></th>
                <th><span>위치</span></th>
              </tr>
              <tr>
                <td>
                  <p>{{ braDetails[index].funcMatch.bbong.value.thick }}</p>
                </td>
                <td>
                  <p>
                    {{ braDetails[index].funcMatch.bbong.value.detachThick }}
                  </p>
                </td>
                <td>
                  <p>{{ braDetails[index].funcMatch.bbong.value.locString }}</p>
                </td>
              </tr>
            </table>

            <!-- <w -->
          </div>
          <div class="box">
            <div class="image-box">
              <img v-if="!braDetails[index].funcMatch.bbong.value" src="@/assets/bra_details/no_bbong.png" alt="" />
              <img v-if="braDetails[index].funcMatch.bbong.value !== null && braDetails[index].funcMatch.bbong.value.loc === 0" src="@/assets/bra_details/bbong_side.png" alt="" />
              <img v-if="braDetails[index].funcMatch.bbong.value !== null && braDetails[index].funcMatch.bbong.value.loc === 1" src="@/assets/bra_details/bbong_down.png" alt="" />
              <img v-if="braDetails[index].funcMatch.bbong.value !== null && braDetails[index].funcMatch.bbong.value.loc === 2" src="@/assets/bra_details/bbong_sidedown.png" alt="" />
              <img v-if="braDetails[index].funcMatch.bbong.value !== null && braDetails[index].funcMatch.bbong.value.loc === 3" src="@/assets/bra_details/bbong_all.png" alt="" />
            </div>

            <div class="description">
              <div class="contents">
                <p>
                  <span>{{ braDetails[index].funcMatch.bbong.content }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="message">
            <p>* 사이즈마다 뽕의 두께, 유무가 다를 수 있습니다.</p>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="900" class="wing">
          <div class="key-word">
            <h5><i class="far fa-check-circle"></i>&nbsp;{{ braDetails[index].funcMatch.wing.title }} ( {{ braDetails[index].funcMatch.wing.value }} cm )</h5>
          </div>
          <div class="box">
            <div class="image-box">
              <img v-if="braDetails[index].funcMatch.wing.value >= 9" src="@/assets/bra_details/wing_long.png" alt="" />
              <img v-else src="@/assets/bra_details/wing_short.png" alt="" />
            </div>
            <div class="description">
              <div class="contents">
                <p>{{ braDetails[index].funcMatch.wing.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="900" class="side-bone">
          <div class="key-word">
            <h5><i class="far fa-check-circle"></i>&nbsp;{{ braDetails[index].funcMatch.sidebone.title }} ( {{ braDetails[index].funcMatch.sidebone.value }} 개 )</h5>
          </div>
          <div class="box">
            <div class="image-box">
              <img v-if="braDetails[index].funcMatch.sidebone.value == 0" src="@/assets/bra_details/sidebone_zero.png" alt="" />
              <img v-if="braDetails[index].funcMatch.sidebone.value == 1" src="@/assets/bra_details/sidebone_one.png" alt="" />
              <img v-if="braDetails[index].funcMatch.sidebone.value == 2" src="@/assets/bra_details/sidebone_2.png" alt="" />
              <img v-if="braDetails[index].funcMatch.sidebone.value == 3" src="@/assets/bra_details/sidebone_3.png" alt="" />
            </div>
            <div class="description">
              <div class="contents">
                <p>{{ braDetails[index].funcMatch.sidebone.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="900" v-if="braDetails[index].funcMatch.shoulderStrap != null" class="shoulder-strap">
          <div class="key-word">
            <h5><i class="far fa-check-circle"></i>&nbsp;{{ braDetails[index].funcMatch.shoulderStrap.title }}</h5>
          </div>
          <div class="box">
            <div class="image-box">
              <img src="@/assets/bra_details/shoulder_thick.png" alt="" />
            </div>
            <div class="description">
              <div class="contents">
                <p>{{ braDetails[index].funcMatch.shoulderStrap.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="add-info">
      <div class="add-info-title">
        <h3>추가 정보</h3>
      </div>
      <div class="add-description">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="900" class="wire">
          <div class="key-word">
            <h5><i class="far fa-check-circle"></i>&nbsp;{{ braDetails[index].addInfo.wire.title }}</h5>
          </div>
          <div class="box">
            <div class="image-box">
              <img v-if="braDetails[index].addInfo.wire.value == 1" src="@/assets/bra_details/hard_wire.png" alt="" />
              <img v-else-if="braDetails[index].addInfo.wire.value == 2" src="@/assets/bra_details/soft_wire.png" alt="" />
              <img v-else-if="braDetails[index].addInfo.wire.value == 0" src="@/assets/bra_details/no_wire.png" alt="" />
            </div>
            <div class="description">
              <div class="contents">
                <p>{{ braDetails[index].addInfo.wire.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="900" v-if="braDetails[index].addInfo.cupShape != null" class="cupShape">
          <div class="key-word">
            <h5><i class="far fa-check-circle"></i>&nbsp;{{ braDetails[index].addInfo.cupShape.title }}</h5>
          </div>
          <div class="box">
            <div class="image-box">
              <img v-if="braDetails[index].addInfo.cupShape.value == 1" src="@/assets/bra_details/3of4cup.png" alt="" />
              <img v-else-if="braDetails[index].addInfo.cupShape.value == 2" src="@/assets/bra_details/half_cup.png" alt="" />
            </div>
            <div class="description">
              <div class="contents">
                <p>{{ braDetails[index].addInfo.cupShape.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="900" v-if="braDetails[index].addInfo.cupType != null" class="cupType">
          <div class="key-word">
            <h5><i class="far fa-check-circle"></i>&nbsp;{{ braDetails[index].addInfo.cupType.title }}</h5>
          </div>
          <div class="box">
            <div class="image-box">
              <img v-if="braDetails[index].addInfo.cupType.value == 1" src="@/assets/bra_details/buzigpo_bra.png" alt="" />
              <img v-else-if="braDetails[index].addInfo.cupType.value == 2" src="@/assets/bra_details/hotgyeop_bra.png" alt="" />
            </div>
            <div class="description">
              <div class="contents">
                <p>{{ braDetails[index].addInfo.cupType.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="900" class="hookEye">
          <div class="key-word">
            <h5><i class="far fa-check-circle"></i>&nbsp;{{ braDetails[index].addInfo.hookEye.title }}</h5>
          </div>
          <div class="box">
            <div class="image-box">
              <img v-if="braDetails[index].addInfo.hookEye.value.hook === 2 && braDetails[index].addInfo.hookEye.value.eye === 3" src="@/assets/bra_details/2hook_6eye.png" alt="" />
              <img v-else-if="braDetails[index].addInfo.hookEye.value.hook === 2 && braDetails[index].addInfo.hookEye.value.eye === 4" src="@/assets/bra_details/2hook_8eye.png" alt="" />
              <img v-else-if="braDetails[index].addInfo.hookEye.value.hook === 3 && braDetails[index].addInfo.hookEye.value.eye === 3" src="@/assets/bra_details/3hook_9eye.png" alt="" />
              <img v-else-if="braDetails[index].addInfo.hookEye.value.hook === 3 && braDetails[index].addInfo.hookEye.value.eye === 4" src="@/assets/bra_details/3hook_12eye.png" alt="" />
            </div>
            <div class="description">
              <div v-if="braDetails[index].addInfo.hookEye.content != null" class="contents">
                <p>{{ braDetails[index].addInfo.hookEye.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Chart from 'chart.js/auto';

export default {
  props: {
    userName_: String,
    index_: Number,
    braDetails_: Array,
    isKitUploaded: Boolean,
  },
  watch: {
    userName_(newVal) {
      console.log(newVal);
      this.userName = this.userName_;
    },
    index_(newVal) {
      console.log(newVal);
      this.index = this.index_;
    },
    braDetails_: {
      deep: true,
      handler(newVal) {
        console.log(newVal);
        this.braDetails = this.braDetails_;
        console.log('now done!');
      },
    },
  },
  data() {
    return {
      userName: this.userName_,
      index: this.index_,
      braDetails: this.braDetails_,
    };
  },
  methods: {
    async fetchDetail() {
      const result = await axios.get('/braRecommend/getBraDetails');
      console.log(result.data);
      if (result.data.success) {
        return (this.braDetails = result.data.braDetails);
      }
      console.log(result.data.message);
    },
  },
  async mounted() {
    window.scrollTo(0, 0);
    const ctx = document.getElementById('myChart');
    await this.fetchDetail();
    console.log([
      this.braDetails[this.index].funcMatch.bigger[0],
      this.braDetails[this.index].funcMatch.gather[0],
      this.braDetails[this.index].funcMatch.pushup[0],
      this.braDetails[this.index].funcMatch.under[0],
      this.braDetails[this.index].funcMatch.accBreast[0],
      this.braDetails[this.index].funcMatch.accBack[0],
    ]);
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['커보이기', '모아주기', '올려주기', '받쳐주기', '부유방 보정', '등살 보정'],
        datasets: [
          {
            // axis: 'y',
            // indexAxis: 'y',
            label: `${this.userName}님`,
            data: [
              this.braDetails[this.index].funcMatch.bigger[0] == 0 ? 1 : this.braDetails[this.index].funcMatch.bigger[0],
              this.braDetails[this.index].funcMatch.gather[0] == 0 ? 1 : this.braDetails[this.index].funcMatch.gather[0],
              this.braDetails[this.index].funcMatch.pushup[0] == 0 ? 1 : this.braDetails[this.index].funcMatch.pushup[0],
              this.braDetails[this.index].funcMatch.under[0] == 0 ? 1 : this.braDetails[this.index].funcMatch.under[0],
              this.braDetails[this.index].funcMatch.accBreast[0] == 0 ? 1 : this.braDetails[this.index].funcMatch.accBreast[0],
              this.braDetails[this.index].funcMatch.accBack[0] == 0 ? 1 : this.braDetails[this.index].funcMatch.accBack[0],
            ],
            fill: false,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            min: 0,
            max: 100,
          },
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              fontSize: 18,
            },
          },
        },
      },
    });
    console.log(myChart);
  },
};
</script>

<style lang="scss" scoped>
*:not(i):not(button) {
  font-family: $font-main, sans-serif !important;
  scroll-behavior: smooth;
}
.container-box {
  background-color: $border;
  padding: 16px;
  margin: 0px 64px;
  border-radius: 8px;

  @media screen and (max-width: $md-breakpoint) {
    padding: 8px;
    margin: 0px;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;

    .goback {
      font-size: 24;
      color: $primary;
      position: absolute;
      left: 2%;
      display: flex;
      align-items: center;

      &:hover {
        color: $tertiary;
      }

      span {
        @include text-style(16, primary);
        font-weight: bold;
        @media screen and (max-width: $md-breakpoint) {
          @include text-style(14, primary);
        }
      }
    }

    h2 {
      @include text-style(18, $primary);
      text-align: center;
      font-weight: bold;
      @media screen and (max-width: $md-breakpoint) {
        @include text-style(16, $primary);
      }
    }
  }

  .bra-info {
    background-color: $white;
    margin: 16px 32px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: $md-breakpoint) {
      margin: 16px 8px;
    }
    .image-box {
      display: flex;
      justify-content: center;
      padding: 8px;
      margin-bottom: 4px;
      img {
        width: 200px;
      }
    }

    .bra-name {
      display: flex;
      background-color: $background;
      margin: 8px;
      /* padding: 8px 56px; */
      padding: 8px 16px;
      justify-content: center;
      flex-direction: column;

      h3 {
        @include text-style(18, $primary);
        font-weight: bold;
        text-align: center;
        margin-bottom: 16px;
        @media screen and (max-width: $md-breakpoint) {
          @include text-style(16, $primary);
        }
      }

      p {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        margin-top: 4px;
        span {
          @include text-style(16, $blue-dark);
          font-weight: bold;

          @media screen and (max-width: $md-breakpoint) {
            @include text-style(14, $blue-dark);
          }
        }
      }
      .tags {
        display: flex;
        margin: 8px;
        /* gap: 8px; */
        /* padding: 16px 32px; */

        @media screen and (max-width: 820px) {
          /* padding: 8px 16px; */
        }

        p {
          @include text-style(16, $secondary);
          /* width: 120px; */
          display: flex;
          align-items: center;
          justify-content: start;
          font-weight: 600;
          width: 100px;

          @media screen and (max-width: 820px) {
            font-size: 14px;
          }
        }

        span {
          @include text-style(14, $blue);
          background-color: #fff;
          padding: 4px 16px;
          display: flex;
          flex-wrap: wrap;
          border-radius: 16px;
          font-weight: 600;
          border: 1px solid $blue;
          // max-width: 244px;
          /* margin-left: 16px; */

          @media screen and (max-width: 540px) {
            max-width: 180px;
          }
        }
      }
    }
  }

  .details {
    background-color: $white;
    margin: 16px 32px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: $md-breakpoint) {
      margin: 16px 8px;
    }
    table {
      padding: 16px 100px;

      @media screen and (max-width: $md-breakpoint) {
        padding: 16px 40px;
      }
      tr {
        th {
          display: flex;
          align-content: flex-start;
          font-weight: bold;
          @include text-style(16, $secondary);
          width: 88px;
          @media screen and (max-width: $md-breakpoint) {
            @include text-style(14, $secondary);
          }
        }

        td {
          @include text-style(16, $primary);
          font-weight: bold;
          @media screen and (max-width: $md-breakpoint) {
            @include text-style(14, $primary);
          }
          .msg {
            @include text-style(14, $red);

            @media screen and (max-width: $md-breakpoint) {
              @include text-style(13, $red);
            }
          }

          span {
            font-weight: bold;
            margin-right: 1px;
          }
        }
      }
    }

    .button-box {
      display: flex;
      padding: 8px;
      justify-content: center;
      // align-items: center;
      button {
        width: 144px;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  .breast-fit {
    .breast-fit-title {
      margin-left: 32px;
      margin-top: 32px;
      display: flex;
      align-items: center;

      @media screen and (max-width: $md-breakpoint) {
        margin-left: 16px;
      }
      h3 {
        @include text-style(18, $primary);
        font-weight: bold;

        span {
          @include text-style(18, $red);
          font-weight: bold;
        }
      }

      i {
        color: $primary;
      }
    }

    .breast-under {
      background-color: $white;
      margin: 16px 32px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      flex-direction: column;

      @media screen and (max-width: $md-breakpoint) {
        margin: 16px 8px;
      }

      .breast-under-graph {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        flex-direction: column;

        .graph-box {
          display: inline-flex;
          margin: 8px;
          margin-left: 16px;

          // img {
          //   width: 300px;
          // }
          // border-right: 3px solid $blue-light;
          // border-left: 3px solid $blue-light;

          .image-box {
            display: inline-flex;
            position: relative;
            flex-direction: column;
            border: 2px dashed $blue-light;
            border-radius: 8px;

            h5 {
              @include text-style(14);
              position: absolute;
              top: 1%;
              left: 1%;
              border-radius: 8px;
              z-index: 3;
              padding: 4px;
              background-color: $blue-light;
              color: $white;
            }
            img {
              width: 224px;
            }

            .user-image-box {
              position: absolute;
              display: inline-flex;
              justify-content: center;
              z-index: 2;
              // margin-bottom: 4px;
              img {
                width: 224px;
                // border-left: 3px solid $red;
                // border-right: 3px solid $red;
                /* margin-left: px; */
              }
            }
          }
        }

        .description_ {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .graph-info {
            @media screen and (max-width: 820px) {
              display: flex;
            }

            p {
              @include text-style(14, $primary);
              font-weight: 600;
              // line-height: 180%;
              i {
                color: $primary;
              }

              .bra {
                color: $blue-dark;
              }

              span {
                @include text-style(13, $secondary);
                margin-right: 2px;
              }
            }
          }
        }

        .conclusion {
          @include text-style(14, $primary);
          font-weight: bold;
          margin-left: 8px;
          margin-top: 16px;
        }
      }

      .description {
        padding: 16px 16px 8px;

        @media screen and (max-width: $md-breakpoint) {
          padding: 8px 16px;
        }
        .title {
          display: flex;
          justify-content: center;
          h4 {
            @include text-style(16, $white);
            font-weight: bold;
            box-shadow: 1px 2px 2px 1px $border;
            /* margin-left: 8px */
            text-align: center;
            margin-bottom: 8px;
            padding: 8px 16px;
            border-radius: 16px;
            width: 120px;
            background-color: $blue-light;
          }
        }

        p {
          @include text-style(14, $primary);
          padding: 8px 0;
          // text-align: center;
        }

        .blur-image {
          margin: 16px auto 32px;
          width: 100%;
          height: 400px;
          background-color: $border;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          box-shadow: 1px 2px 2px 1px $tertiary;

          &:hover {
            opacity: 0.5;
          }

          @media screen and (max-width: 420px) {
            width: 100%;
            height: 300px;
          }
        }

        strong {
          @include text-style(14, $blue-dark);
          background-color: #fff;
          padding: 4px 16px;
          border-radius: 16px;
          box-shadow: 1px 2px 2px 1px $border;
          z-index: 2;
        }
      }
    }

    .rib {
      background-color: $white;
      margin: 16px 32px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 16px 32px;

      @media screen and (max-width: $md-breakpoint) {
        margin: 16px 8px;
        padding: 16px;
      }

      .rib-title {
        display: flex;
        justify-content: center;
        h4 {
          @include text-style(16, $white);
          font-weight: bold;
          box-shadow: 1px 2px 2px 1px $border;
          /* margin-left: 8px */
          text-align: center;
          margin-bottom: 8px;
          padding: 8px 16px;
          border-radius: 16px;
          width: 120px;
          background-color: $blue-light;
        }
      }

      .detail-box {
        display: flex;
        flex-direction: column;

        .detail {
          /* flex-grow: 1; */
          display: flex;
          flex-direction: column;
          margin-bottom: 8px;
          .image-box {
            display: flex;
            justify-content: center;
            margin-bottom: 4px;
            img {
              width: 256px;
              padding: 16px;

              @media screen and (max-width: $md-breakpoint) {
                width: 144px;
              }
            }
          }

          p {
            @include text-style(14, $primary);
            padding: 0 16px;
          }
        }
      }
    }
  }

  .func-fit {
    .func-fit-title {
      margin-left: 32px;
      margin-top: 32px;
      display: flex;
      align-items: center;

      @media screen and (max-width: $md-breakpoint) {
        margin-left: 16px;
      }
      h3 {
        @include text-style(18, $primary);
        font-weight: bold;

        span {
          @include text-style(18, $red);
          font-weight: bold;
        }
      }

      i {
        color: $primary;
      }
    }

    .func-fit-graph {
      background-color: $white;
      margin: 16px 32px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      /* padding: 16px 32px; */
      padding: 44px;
      position: relative;

      @media screen and (max-width: $md-breakpoint) {
        margin: 16px 8px;
        padding: 16px;
      }

      .graph-values {
        position: absolute;
        right: 16%;
        top: 10%;
        height: 80%;
        display: flex;
        flex-direction: column;
        z-index: 20;

        @media screen and (max-width: 1024px) {
          height: 75%;
        }

        @media screen and (max-width: 280px) {
          height: 70%;
          top: 12%;
        }

        .value {
          display: flex;
          align-items: center;
          flex-grow: 1;

          h5 {
            @include text-style(16, $primary);
            font-weight: bold;

            @media screen and (max-width: $md-breakpoint) {
              @include text-style(14, $primary);
            }
          }
        }
      }
    }

    .func-why-description {
      background-color: $white;
      margin: 16px 32px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 16px 32px;

      @media screen and (max-width: $md-breakpoint) {
        margin: 16px 8px;
        padding: 16px;
      }

      .description-title {
        display: flex;
        justify-content: center;

        h4 {
          @include text-style(16, $white);
          font-weight: bold;
          box-shadow: 1px 2px 2px 1px $border;
          /* margin-left: 8px */
          text-align: center;
          margin-bottom: 8px;
          padding: 8px 8px;
          border-radius: 16px;
          width: 256px;
          background-color: $blue-light;
        }
      }

      .cup-shape,
      .cover,
      .bbong,
      .wing,
      .side-bone,
      .shoulder-strap {
        display: flex;
        margin: 8px 0;
        flex-direction: column;

        .key-word {
          h5 {
            @include text-style(16, $blue-dark);
            font-weight: bold;
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            /* margin-left: 4px; */
            text-align: center;
          }
        }

        .rep-description {
          background-color: $background;
          display: flex;
          align-items: center;
          flex: 1;
          width: 100%;
          padding: 8px 16px;
          border-radius: 8px;
          margin-bottom: 8px;

          @media screen and (max-width: 540px) {
            padding: 4px;
          }

          table {
            width: 85%;
            margin: auto;

            @media screen and (max-width: 1024px) {
              width: 100%;
            }

            @media screen and (max-width: 280px) {
              display: flex;
              justify-content: center;
            }

            tr {
              display: flex;
              flex-wrap: wrap;

              @media screen and (max-width: 280px) {
                flex-direction: column;
                margin-right: 4px;
              }

              th {
                flex-grow: 1;
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                  @include text-style(13, $primary);
                  font-weight: bold;
                  width: 120px;
                  text-align: center;

                  @media screen and (max-width: 1024px) {
                    width: 88px;
                  }

                  @media screen and (max-width: 360px) {
                    width: 80px;
                  }
                }
              }
              td {
                flex-grow: 1;
                margin-top: 4px;
                display: flex;
                justify-content: center;
                align-items: center;

                p {
                  @include text-style(14, $secondary);
                  background-color: white;
                  padding: 2px;
                  border-radius: 8px;
                  width: 120px;
                  text-align: center;
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  align-items: center;
                  font-weight: 600;

                  @media screen and (max-width: 1024px) {
                    width: 88px;
                    height: 44px;
                  }

                  @media screen and (max-width: 360px) {
                    width: 80px;
                    height: 50px;
                  }
                }
              }
            }
          }
        }

        .box {
          display: flex;

          @media screen and (max-width: 375px) {
            flex-direction: column;
            justify-content: center;
          }
          .image-box {
            display: flex;
            align-items: center;
            margin-bottom: 4px;
            @media screen and (max-width: 375px) {
              /* flex-direction: column; */
              justify-content: center;
              margin: 4px;
              margin-bottom: 8px;
            }
            img {
              width: 120px;
              margin-right: 16px;
              @media screen and (max-width: $md-breakpoint) {
                width: 92px;
                margin-right: 8px;
              }
            }
          }

          .description {
            background-color: $background;
            display: flex;
            align-items: center;
            flex: 1;
            padding: 2px 12px;
            border-radius: 8px;

            .contents {
              p {
                @include text-style(16, $primary);
                @media screen and (max-width: $md-breakpoint) {
                  @include text-style(13, $primary);
                }
              }
            }
          }
        }
      }

      .bbong {
        .message {
          margin-left: 8px;
          p {
            @include text-style(14, $red);
            margin-top: 4px;
            @media screen and (max-width: 375px) {
              @include text-style(13, $red);
            }
          }
        }
      }
    }
  }

  .add-info {
    .add-info-title {
      margin-left: 32px;
      margin-top: 32px;
      display: flex;
      align-items: center;

      @media screen and (max-width: $md-breakpoint) {
        margin-left: 16px;
      }
      h3 {
        @include text-style(18, $primary);
        font-weight: bold;
      }
    }

    .add-description {
      background-color: $white;
      margin: 16px 32px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 16px 32px;

      @media screen and (max-width: $md-breakpoint) {
        margin: 16px 8px;
        padding: 16px;
      }
      .wire,
      .cupShape,
      .cupType,
      .hookEye {
        display: flex;
        margin: 8px 0;
        flex-direction: column;

        .key-word {
          h5 {
            @include text-style(16, $blue-dark);
            font-weight: bold;
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
        }
        .box {
          display: flex;

          @media screen and (max-width: 375px) {
            flex-direction: column;
            justify-content: center;
          }
          .image-box {
            display: flex;
            align-items: center;
            margin-bottom: 4px;
            @media screen and (max-width: 375px) {
              justify-content: center;
              margin: 4px;
              margin-bottom: 8px;
            }
            img {
              width: 120px;
              margin-right: 16px;
              @media screen and (max-width: $md-breakpoint) {
                width: 92px;
                margin-right: 8px;
              }
            }
          }

          .description {
            background-color: $background;
            display: flex;
            align-items: center;
            flex: 1;
            padding: 2px 12px;
            border-radius: 8px;

            .contents {
              p {
                @include text-style(16, $primary);
                @media screen and (max-width: $md-breakpoint) {
                  @include text-style(13, $primary);
                }
              }
            }
          }
        }
      }
    }
  }

  .purchase-links {
    .purchase-links-title {
      margin-left: 32px;
      margin-top: 32px;
      display: flex;
      align-items: center;

      @media screen and (max-width: $md-breakpoint) {
        margin-left: 16px;
      }
      h3 {
        @include text-style(18, $primary);
        font-weight: bold;

        span {
          @include text-style(18, $red);
          font-weight: bold;
        }
      }

      i {
        color: $primary;
      }
    }

    .contents {
      background-color: $white;
      margin: 16px 32px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 16px 32px;

      @media screen and (max-width: $md-breakpoint) {
        margin: 16px 8px;
        padding: 16px;
      }

      .before-purchase {
        margin-top: 24px;
        background-color: $background;
        border-radius: 8px;
        padding: 16px 0px;
        width: 100%;
      }

      button {
        margin: 4px;
        width: auto;
        height: auto;
        padding: 8px;
        a {
          font-weight: 600;
        }
      }

      p {
        @include text-style(14, $secondary);
        padding: 8px;
        font-weight: 600;
        text-align: center;
      }

      .button-box {
        margin: 8px auto 8px;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
