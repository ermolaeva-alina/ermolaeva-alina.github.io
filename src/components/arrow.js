class Arrow extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
     <svg width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="easy-in-out-fast">
       <g clip-path="url(#clip0_849_3099)">
         <path class="easy-in-out-fast"
               d="M5 14.9998L14.4626 5.53711"
               stroke="#2C2925"
               stroke-width="1.25"
               stroke-linecap="square"
               stroke-linejoin="round"/>
         <path class="easy-in-out-fast"
               d="M6.875 5H15V13.125"
               stroke="#2C2925"
               stroke-width="1.25"
               stroke-linecap="square"/>
       </g>
       <defs>
         <clipPath id="clip0_849_3099">
           <rect width="20" height="20" fill="white"/>
         </clipPath>
       </defs>
     </svg>
   `
  }
}

customElements.define('dark-arrow', Arrow)
