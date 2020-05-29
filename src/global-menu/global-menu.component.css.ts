import { css } from '@rxdi/lit-html';

export const style = css`
:host {
  --install-button-color: linear-gradient(
    90deg,
    #1fc2c8 0%,
    #9337d8 169.8%
  );
  --modal-z-index: auto;
}
button {
  outline: none;
}
#installModal {
  background: white;
  position: fixed;
  bottom: 3em;
  top: 3em;
  left: 14em;
  right: 14em;
  font-family: sans-serif;
  box-shadow: 0px 25px 26px rgba(32, 36, 50, 0.25),
    0px 5px 9px rgba(51, 58, 83, 0.53);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0;
  animation-name: opened;
  animation-duration: 150ms;
  z-index: 100000;
}
@keyframes opened {
  from {
    transform: scale(0.8, 0.8);
    opacity: 0.4;
  }
  to {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes mobile {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadein {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
#background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  right: 0;
  background: #e3e3e3b0;
  backdrop-filter: blur(5px);
  animation-name: fadein;
  animation-duration: 250ms;
}
#headerContainer {
  display: flex;
  align-items: flex-start;
  margin: 40px;
  margin-bottom: 32px;
}
#headerContainer h1 {
  font-size: 34px;
  color: #3c3c3c;
  margin-top: 20px;
  margin-bottom: 7px;
}
#headerContainer img {
  height: 122px;
  width: 122px;
  background: lightgrey;
  border-radius: 10px;
  padding: 12px;
  border-radius: 24px;
  margin-right: 24px;
}
#buttonsContainer {
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: -4em;
  height: 100px;
  background: #dedede75;
  margin-top: auto;
  margin-bottom: 63px;
  width: 100%;
  right: 0em;
  border-radius: 0px 0px 12px 12px;
}
#openButton,
#installButton {
  text-align: center;
  align-content: center;
  align-self: center;
  vertical-align: middle;
  justify-self: flex-end;
  line-height: 200%;
  flex: 0 0 auto;
  display: inline-block;
  background: #0078d4;
  color: #ffffff;
  cursor: pointer;
  border: solid 1px rgba(0, 0, 0, 0);
  outline: none;
}
#installButton {
  min-width: 130px;
  margin-right: 30px;
  background: hsl(214, 27%, 26%);
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  padding-top: 10px;
  padding-bottom: 9px;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;
}
#closeButton {
  position: fixed;
  top: 5em;
  right: 18em;
  background: transparent;
  border: none;
  color: black;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 20px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  z-index: 100001;
  animation-name: fadein;
  animation-duration: 450ms;
}
#contentContainer {
  margin-left: 40px;
  margin-right: 40px;
}
#contentContainer h3 {
  font-size: 22px;
  color: #3c3c3c;
  margin-bottom: 12px;
}
#contentContainer p {
  font-size: 14px;
  color: #3c3c3c;
}
#featuresScreenDiv {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
}
#featuresScreenDiv h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 225%;
  margin-top: 0px;
}
#keyFeatures {
  max-height: 220px;
  overflow: hidden;
}
#keyFeatures ul {
  padding-inline-start: 22px;
  margin-block-start: 12px;
}
#featuresScreenDiv #keyFeatures li {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;
  color: rgba(51, 51, 51, 0.72);
}
#screenshots {
  display: flex;
  justify-content: flex-end;
}
#screenshots img {
  height: 200px;
  margin-right: 12px;
}
#tagsDiv {
  margin-top: 1em;
  margin-bottom: 1em;
}
#desc {
  width: 40em;
  font-size: 14px;
  color: #7e7e7e;
  text-overflow: ellipsis;
  overflow: hidden;
}
infinite-carousel-wc {
  background: #f0f0f0;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 22px;
  max-width: 27em;
  min-height: 180px;
}
infinite-carousel-wc > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
infinite-carousel-wc > div > img {
  max-width: 20em;
  object-fit: contain;
}
#tagsDiv span {
  background: grey;
  color: white;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 4px;
  font-weight: bold;
  border-radius: 24px;
  margin-right: 12px;
  padding-top: 1px;
}
@media (min-width: 1445px) {
  #installModal {
    left: 22em;
    right: 22em;
  }
  #closeButton {
    right: 28em;
  }
}
@media (min-width: 1800px) {
  #installModal {
    left: 26em;
    right: 26em;
  }
  #closeButton {
    right: 32em;
  }
}
@media (min-width: 2000px) {
  #installModal {
    left: 38em;
    right: 38em;
  }
  #closeButton {
    right: 47em;
  }
}
@media (max-width: 1200px) {
  #installModal {
    bottom: 0em;
    top: 0em;
    left: 0em;
    right: 0em;
    border-radius: 0px;
    animation-name: mobile;
    animation-duration: 250ms;
  }
  #closeButton {
    top: 20px;
    right: 20px;
  }
  #screenshots {
    justify-content: center;
  }
}
@media (max-width: 962px) {
  #desc {
    display: none;
  }
  #headerContainer {
    margin-bottom: 24px;
  }
  #headerContainer img {
    height: 42px;
    width: 42px;
  }
}
@media (max-width: 800px) {
  #background {
    display: none;
  }
  #installModal {
    overflow: scroll;
    box-shadow: none;
  }
  infinite-carousel-wc {
    width: 100%;
  }
  #screenshotsContainer {
    width: 100%;
  }
  #screenshots img {
    height: 180px;
  }
  #buttonsContainer {
    display: flex;
    justify-content: center;
    bottom: 0;
    margin-bottom: 0;
    border-radius: 0;
    padding-top: 1em;
    padding-bottom: 1em;
  }
  #buttonsContainer #installButton {
    margin-right: 0px;
  }
  #featuresScreenDiv {
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0px;
  }
  #headerContainer {
    margin: 20px;
  }
  #desc {
    display: none;
  }
  #contentContainer {
    margin-left: 20px;
    margin-right: 20px;
  }
  #headerContainer img {
    height: 60px;
    width: 60px;
    margin-right: 12px;
  }
}
`
