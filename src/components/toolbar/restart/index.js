import React from 'react';
import './styles.css';

export default class Restart extends React.PureComponent {

  render() {
    const { handleRePlayClick, desabledRePlay  } = this.props;
    return (
      <section className='restart-container'>
        <button className={desabledRePlay ? 'button-container button-disabled': 'button-container' } onClick={handleRePlayClick} disabled={desabledRePlay}>
          <svg height='410pt' viewBox='-20 0 410 410.52919' width='410pt' xmlns='http://www.w3.org/2000/svg'><path d='m221.269531 58.710938v-38.707032c0-1.613281-.976562-3.078125-2.46875-3.695312-1.5-.628906-3.21875-.277344-4.359375.867187l-40.359375 40.363281c-88.609375 9.605469-157.816406 84.84375-157.816406 175.960938 0 97.613281 79.414063 177.027344 177.027344 177.027344s177.027343-79.414063 177.027343-177.027344c0-88.089844-64.6875-161.339844-149.050781-174.789062zm-27.976562 298.675781c-68.308594 0-123.882813-55.578125-123.882813-123.886719 0-59.417969 42.058594-109.183594 97.960938-121.128906l47.070312 47.066406c.761719.765625 1.789063 1.171875 2.828125 1.171875.515625 0 1.035157-.097656 1.53125-.304687 1.496094-.617188 2.46875-2.078126 2.46875-3.695313v-43.765625c54.871094 12.722656 95.90625 61.972656 95.90625 120.65625 0 68.3125-55.574219 123.886719-123.882812 123.886719zm0 0' fill='#e6e7e8'/><path d='m201.269531 46.167969v-42.167969l-41.339843 41.34375c-87.410157 8.710938-155.664063 82.460938-155.664063 172.160156 0 95.5625 77.46875 173.027344 173.027344 173.027344 95.558593 0 173.027343-77.464844 173.027343-173.027344 0-87.417968-64.84375-159.660156-149.050781-171.335937zm-23.976562 299.21875c-70.628907 0-127.882813-57.257813-127.882813-127.886719 0-62.203125 44.417969-114.011719 103.261719-125.492188l48.597656 48.601563v-48.710937c59.160157 11.226562 103.90625 63.175781 103.90625 125.601562 0 70.628906-57.253906 127.886719-127.882812 127.886719zm0 0' fill='#fff'/><path d='m201.269531 46.191406v-42.191406l-43.363281 43.371094c-80.574219 14.761718-141.640625 85.292968-141.640625 170.128906 0 93.550781 74.25 169.710938 167.027344 172.878906 92.777343-3.167968 167.027343-79.328125 167.027343-172.878906 0-87.414062-64.84375-159.628906-149.050781-171.308594zm-11.976562 299.195313c-2.011719 0-4.011719-.0625-6-.152344-1.988281.089844-3.988281.152344-6 .152344-70.628907 0-127.882813-57.257813-127.882813-127.886719 0-62.203125 44.417969-114.011719 103.261719-125.492188l48.597656 48.601563v-50.414063c65.007813 6.042969 115.90625 60.722657 115.90625 127.308594 0 70.625-57.253906 127.882813-127.882812 127.882813zm0 0' fill='#fa759e'/><g fill='#3a2c60'><path d='m245.605469 320.863281c-3.785157 2.511719-7.757813 4.839844-11.804688 6.917969-1.964843 1.011719-2.738281 3.421875-1.730469 5.386719.710938 1.382812 2.105469 2.171875 3.5625 2.171875.617188 0 1.238282-.136719 1.824219-.4375 4.308594-2.21875 8.535157-4.691406 12.566407-7.359375 1.839843-1.226563 2.34375-3.707031 1.125-5.546875-1.222657-1.847656-3.703126-2.355469-5.542969-1.132813zm0 0'/><path d='m205.269531 42.78125v-38.777344c0-1.613281-.976562-3.078125-2.46875-3.695312-1.5-.628906-3.21875-.2812502-4.359375.867187l-40.441406 40.4375c-88.558594 9.652344-157.734375 84.800781-157.734375 175.886719 0 97.613281 79.414063 177.027344 177.027344 177.027344s177.027343-79.414063 177.027343-177.027344c0-88.082031-64.699218-161.257812-149.050781-174.71875zm-27.976562 343.746094c-93.199219 0-169.027344-75.820313-169.027344-169.027344 0-83.429688 60.777344-152.867188 140.371094-166.523438l-18.5 18.5c-.753907.753907-1.171875 1.765626-1.171875 2.828126 0 1.066406.417968 2.082031 1.171875 2.828124l14.597656 14.601563c-57.023437 14.535156-99.328125 66.285156-99.328125 127.765625 0 72.722656 59.164062 131.886719 131.882812 131.886719 15.984376 0 31.597657-2.828125 46.417969-8.40625 2.070313-.773438 3.113281-3.082031 2.335938-5.148438-.773438-2.070312-3.09375-3.109375-5.148438-2.335937-13.914062 5.238281-28.585937 7.890625-43.601562 7.890625-68.308594 0-123.882813-55.578125-123.882813-123.886719 0-59.421875 42.070313-109.164062 97.988282-121.105469l47.042968 47.042969c.761719.765625 1.789063 1.171875 2.828125 1.171875.515625 0 1.035157-.097656 1.53125-.304687 1.496094-.617188 2.46875-2.078126 2.46875-3.695313v-43.761719c54.871094 12.722656 95.90625 61.96875 95.90625 120.652344 0 36.246094-15.804687 70.5625-43.359375 94.152344-1.675781 1.4375-1.871094 3.960937-.4375 5.640625 1.433594 1.679687 3.960938 1.871093 5.640625.4375 29.332031-25.117188 46.160157-61.648438 46.160157-100.234375 0-64.527344-46.597657-118.34375-107.902344-129.660156v.023437c-2.207032 0-4 1.789063-4 4v39.085937l-58.65625-58.640624 58.648437-58.644532v32.464844c0 2.210938 1.792969 4 4 4v.082031c81.882813 11.683594 145.050781 82.234375 145.050781 167.292969 0 93.207031-75.828124 169.027344-169.027343 169.027344zm0 0'/></g></svg>
          Reiniciar
        </button>
      </section>
    );
  }
}

