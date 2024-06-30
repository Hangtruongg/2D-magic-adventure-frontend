// import { describe, it, expect, beforeEach, afterEach } from "vitest"; // Replace with Jest imports

// import { shallowMount } from '@vue/test-utils';
// import GameContainer from '@/components/GameContainer.vue';
// import { useRouter } from 'vue-router';

// describe('Navigation to Home Page', () => {
//   let wrapper;
//   let mockRouter;

//   beforeEach(() => {
//     mockRouter = {
//       push: jest.fn(), // Mock the router's push method
//     };

//     useRouter.mockReturnValue(mockRouter); // Mock useRouter hook

//     wrapper = shallowMount(GameContainer, {
//       props: {
//         playerData: {
//           position: { x: 900, y: 450 },
//           direction: 'down',
//           health: 100,
//           hasGun: false,
//           collectedCoins: 0,
//         },
//         tiles: [],
//         bullets: [],
//         monsters: [],
//       },
//     });
//   });

//   afterEach(() => {
//     wrapper.unmount();
//   });

//   it('navigates to home page when exit button is clicked', async () => {
//     const exitButton = wrapper.find('.exitButton');
//     await exitButton.trigger('click');
//     expect(mockRouter.push).toHaveBeenCalledWith({ name: 'home' });
//   });
// });
