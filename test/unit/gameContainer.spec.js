// GameContainer.spec.js
import { shallowMount } from '@vue/test-utils';
import GameContainer from '@/components/GameContainer.vue';
import { describe, it, beforeEach, expect, afterEach } from 'vitest';

describe('GameContainer.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(GameContainer, {
      props: {
        playerData: {
          position: { x: 900, y: 450 },
          direction: 'down',
          health: 100,
          hasGun: false,
          collectedCoins: 0,
        },
        tiles: [],
        bullets: [],
        monsters: [],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the game container', () => {
    expect(wrapper.find('.game').exists()).toBe(true);
  });

  it('renders the player component', () => {
    expect(wrapper.findComponent({ name: 'Player' }).exists()).toBe(true);
  });

  it('renders the monster component', () => {
    expect(wrapper.findComponent({ name: 'Monster' }).exists()).toBe(true);
  });

  // Add more tests as needed
});

