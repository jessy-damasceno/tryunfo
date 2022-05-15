/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div className="Card">
        <div className="Card-title">
          <div className="Card-title-text">
            <h3 data-testid="name-card">{cardName}</h3>
          </div>
          <div id="image">
            <img
              id="image-card"
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            />
          </div>
        </div>
        <div id="description">
          <p data-testid="description-card">{cardDescription}</p>
        </div>
        <div className="Card-atributes">
          <div className="atribute">
            <span>ATK...............................</span>
            <div className="atribute_value">
              <span data-testid="attr1-card">{cardAttr1}</span>
            </div>
          </div>
          <div className="atribute">
            <span>DEF...............................</span>
            <div className="atribute_value">
              <span data-testid="attr2-card">{cardAttr2}</span>
            </div>
          </div>
          <div className="atribute">
            <span>HP.................................</span>
            <div className="atribute_value">
              <span data-testid="attr3-card">{cardAttr3}</span>
            </div>
          </div>
        </div>
        <span data-testid="rare-card" id="rare-card-span">{cardRare}</span>

        {cardTrunfo && (
          <svg id="trunfo-card-img" width="312" height="312" viewBox="0 0 312 312" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_2_561)">
              <circle cx="156.5" cy="156.5" r="141.5" fill="#052727" />
            </g>
            <g filter="url(#filter1_dd_2_561)">
              <circle cx="156" cy="156" r="118" fill="#036B52" />
            </g>
            <path d="M67.9651 193.884C66.8381 194.111 65.6695 194.233 64.4593 194.25C63.2491 194.267 62.1 194.076 61.012 193.678C59.924 193.279 58.9681 192.566 58.1445 191.539C57.3209 190.511 56.7203 189.058 56.3428 187.18C56.2554 186.745 56.1679 186.31 56.0805 185.875C55.9891 185.42 55.8957 184.956 55.8004 184.481L52.8914 170.009L45.4476 171.505L44.1958 165.277L47.2208 164.669C48.2489 164.462 49.0516 164.26 49.6288 164.061C50.2021 163.843 50.5933 163.538 50.8026 163.147C51.0118 162.755 51.0844 162.195 51.0205 161.468C50.9723 160.716 50.819 159.698 50.5607 158.413L49.5533 153.401L57.3828 151.827L59.4691 162.207L68.8406 160.323L70.0924 166.551L60.7209 168.435L63.2602 181.069C63.3357 181.444 63.4112 181.82 63.4867 182.196C63.5582 182.552 63.6278 182.898 63.6953 183.234C63.9894 184.697 64.4038 185.837 64.9385 186.656C65.4732 187.474 66.4029 187.75 67.7276 187.483C68.3603 187.356 68.9415 187.178 69.4712 186.948C70.0208 186.714 70.422 186.51 70.675 186.336L71.9029 192.445C71.5551 192.659 71.0392 192.907 70.3552 193.188C69.6713 193.47 68.8746 193.702 67.9651 193.884ZM81.0608 190.635L74.7303 159.14L82.5301 157.572L84.6343 168.041L82.6225 167.396C82.546 165.992 82.6535 164.633 82.9449 163.32C83.2324 161.987 83.7295 160.776 84.4364 159.688C85.1394 158.58 86.0719 157.642 87.2339 156.873C88.3959 156.105 89.7876 155.558 91.4088 155.232C92.6939 154.974 93.7222 154.87 94.4934 154.92C95.2805 154.947 95.7749 155.002 95.9767 155.085L95.9898 162.519C95.7642 162.42 95.3251 162.333 94.6725 162.259C94.0356 162.161 93.213 162.213 92.2047 162.415C90.6032 162.737 89.3144 163.284 88.3383 164.056C87.3779 164.805 86.6748 165.707 86.2289 166.764C85.779 167.8 85.5269 168.9 85.4727 170.063C85.4145 171.206 85.4946 172.321 85.7132 173.409L88.8605 189.067L81.0608 190.635ZM111.949 198.497C111.02 198.683 110.179 198.801 109.428 198.849C108.68 198.917 108.21 198.929 108.016 198.886L106.794 192.806C107.075 192.873 107.528 192.875 108.152 192.811C108.801 192.763 109.461 192.671 110.134 192.536C111.221 192.318 112.117 191.911 112.82 191.318C113.543 190.72 114.114 189.978 114.532 189.091C114.955 188.225 115.233 187.253 115.366 186.178L115.649 184.053L98.3923 154.384L106.548 152.744L119.273 177.524L118.324 177.715L120.309 149.979L128.316 148.369L124.002 184.01C123.696 186.478 123.164 188.693 122.406 190.656C121.669 192.614 120.488 194.261 118.863 195.595C117.239 196.929 114.934 197.897 111.949 198.497ZM151.128 177.169C148.893 177.618 146.959 177.616 145.326 177.163C143.712 176.706 142.356 175.95 141.26 174.895C140.183 173.836 139.318 172.601 138.664 171.189C138.029 169.774 137.563 168.325 137.265 166.842C137.118 166.111 136.965 165.349 136.806 164.559C136.647 163.768 136.486 162.967 136.323 162.156L133.349 147.358L141.178 145.784L143.908 159.367C144.052 160.078 144.189 160.761 144.32 161.413C144.451 162.065 144.574 162.678 144.689 163.252C144.972 164.655 145.402 165.927 145.98 167.065C146.555 168.184 147.361 169.02 148.397 169.572C149.454 170.121 150.803 170.23 152.444 169.901C154.006 169.587 155.259 168.862 156.203 167.726C157.143 166.57 157.778 165.229 158.109 163.702C158.46 162.171 158.49 160.684 158.2 159.24L161.227 160.483C161.612 162.401 161.679 164.27 161.428 166.089C161.172 167.889 160.612 169.555 159.748 171.086C158.883 172.617 157.725 173.92 156.275 174.993C154.84 176.042 153.124 176.768 151.128 177.169ZM161.27 174.514L154.939 143.018L162.739 141.45L169.069 172.946L161.27 174.514ZM198.849 166.96L196.042 152.992C195.883 152.201 195.743 151.509 195.624 150.916C195.501 150.303 195.39 149.749 195.29 149.255C195.004 147.832 194.54 146.598 193.899 145.555C193.273 144.487 192.4 143.727 191.28 143.273C190.18 142.815 188.77 142.759 187.05 143.105C185.548 143.407 184.287 144.041 183.267 145.007C182.244 145.953 181.523 147.127 181.105 148.527C180.703 149.904 180.667 151.413 180.997 153.054L178.029 151.953C177.501 149.324 177.625 146.871 178.402 144.596C179.195 142.298 180.482 140.363 182.264 138.791C184.047 137.219 186.164 136.187 188.615 135.694C191.146 135.185 193.371 135.252 195.29 135.895C197.228 136.534 198.815 137.675 200.051 139.32C201.306 140.96 202.18 143.006 202.673 145.457C202.864 146.406 203.078 147.474 203.317 148.66C203.555 149.846 203.789 151.013 204.02 152.16L206.679 165.387L198.849 166.96ZM176.577 171.437L170.246 139.941L178.046 138.374L184.377 169.869L176.577 171.437ZM217.995 163.112L212.916 137.844L206.243 139.186L204.992 132.958L211.664 131.616L211.098 128.799C210.729 126.96 210.652 125.299 210.868 123.816C211.08 122.313 211.514 120.991 212.169 119.852C212.825 118.712 213.637 117.736 214.605 116.925C215.589 116.089 216.676 115.408 217.866 114.881C219.075 114.35 220.303 113.959 221.549 113.709C222.735 113.47 223.648 113.359 224.289 113.374C224.95 113.385 225.399 113.418 225.636 113.473L226.9 119.761C226.647 119.729 226.213 119.724 225.6 119.744C225.003 119.741 224.369 119.807 223.696 119.942C222.49 120.184 221.528 120.563 220.808 121.078C220.085 121.573 219.567 122.17 219.256 122.871C218.944 123.571 218.78 124.344 218.765 125.191C218.746 126.017 218.832 126.905 219.023 127.854L219.464 130.049L228.183 128.296L229.435 134.524L220.716 136.277L225.795 161.544L217.995 163.112ZM253.582 156.607C250.26 157.275 247.195 157.171 244.386 156.296C241.573 155.401 239.197 153.862 237.257 151.681C235.337 149.496 234.056 146.812 233.417 143.628C232.773 140.425 232.918 137.465 233.853 134.747C234.804 132.005 236.405 129.688 238.658 127.795C240.91 125.903 243.697 124.623 247.019 123.955C250.34 123.287 253.406 123.391 256.215 124.267C259.024 125.142 261.386 126.662 263.302 128.828C265.234 130.97 266.522 133.642 267.166 136.845C267.806 140.028 267.653 143 266.706 145.762C265.779 148.519 264.192 150.854 261.943 152.767C259.69 154.659 256.903 155.94 253.582 156.607ZM252.3 150.231C254.099 149.869 255.588 149.138 256.765 148.038C257.943 146.937 258.758 145.57 259.212 143.936C259.661 142.282 259.683 140.447 259.277 138.43C258.872 136.414 258.147 134.749 257.101 133.437C256.052 132.106 254.774 131.169 253.266 130.629C251.759 130.089 250.106 129.999 248.306 130.361C246.527 130.719 245.037 131.44 243.835 132.525C242.654 133.605 241.837 134.963 241.383 136.597C240.926 138.211 240.9 140.026 241.305 142.043C241.711 144.059 242.44 145.744 243.493 147.095C244.543 148.427 245.823 149.373 247.334 149.933C248.866 150.489 250.521 150.589 252.3 150.231Z" fill="white" />
            <circle cx="156" cy="156" r="155.5" stroke="#2FC18C" />
            <path d="M146.807 96.087L150.958 103.314C151.054 103.492 151.197 103.641 151.373 103.742C151.548 103.844 151.748 103.895 151.951 103.89C152.104 103.893 152.257 103.866 152.4 103.809C152.542 103.752 152.672 103.668 152.782 103.56C152.891 103.453 152.978 103.324 153.037 103.183C153.097 103.041 153.127 102.889 153.126 102.736L153.148 88.2821C153.157 88.0219 153.078 87.766 152.923 87.5566C152.768 87.3471 152.547 87.1964 152.295 87.1292C152.043 87.062 151.776 87.0823 151.537 87.1867C151.298 87.2912 151.102 87.4736 150.981 87.704L146.807 94.908C146.706 95.0837 146.654 95.2835 146.658 95.4862C146.654 95.6961 146.705 95.9034 146.807 96.087Z" fill="#2FC18C" />
            <path d="M142.507 98.5455L146.679 105.751C146.784 105.933 146.843 106.139 146.851 106.349C146.84 106.655 146.712 106.946 146.493 107.161C146.274 107.376 145.981 107.499 145.674 107.504C145.471 107.505 145.271 107.453 145.095 107.354L132.577 100.107C132.402 100.01 132.256 99.8674 132.154 99.6944C132.052 99.5213 131.999 99.3242 132 99.1236C131.997 98.9675 132.025 98.8123 132.083 98.6671C132.141 98.522 132.227 98.3898 132.336 98.2783C132.446 98.1668 132.577 98.0783 132.721 98.0178C132.865 97.9574 133.02 97.9262 133.176 97.9263L141.501 97.9688C141.705 97.964 141.907 98.0152 142.084 98.1169C142.262 98.2185 142.408 98.3668 142.507 98.5455Z" fill="#2FC18C" />
            <path d="M141.48 92.947H133.156C132.901 92.9463 132.654 92.8617 132.452 92.7065C132.251 92.5512 132.106 92.3339 132.04 92.088C131.974 91.8422 131.992 91.5817 132.089 91.3466C132.186 91.1115 132.358 90.915 132.579 90.7875L145.116 83.5806C145.299 83.4748 145.505 83.4159 145.716 83.4092C146.024 83.4162 146.317 83.543 146.533 83.7627C146.749 83.9823 146.871 84.2775 146.872 84.5853C146.865 84.789 146.806 84.9874 146.7 85.162L142.485 92.3675C142.385 92.545 142.239 92.6924 142.062 92.7943C141.885 92.8962 141.684 92.9489 141.48 92.947Z" fill="#2FC18C" />
            <path d="M129 192L266 164" stroke="#2FC18C" strokeWidth="3" strokeLinecap="round" />
            <defs>
              <filter id="filter0_dd_2_561" x="12" y="13" width="289" height="289" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_561" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_2_561" result="effect2_dropShadow_2_561" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2_561" result="shape" />
              </filter>
              <filter id="filter1_dd_2_561" x="35" y="36" width="242" height="242" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_561" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_2_561" result="effect2_dropShadow_2_561" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2_561" result="shape" />
              </filter>
            </defs>
          </svg>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
