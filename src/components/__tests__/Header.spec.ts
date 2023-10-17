import HeaderMenu from '../Header.vue';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

describe('HeaderMenu', () => {
  it('Should render Header Menu with Logo and menu elements', () => {
    const wrapper = mount(HeaderMenu);

    expect(wrapper.find('.header__logo').exists()).toBe(true);
    expect(wrapper.find('.header__menu').exists()).toBe(true);
  })
  
  it('Should click on hamburger menu icon toggles menu visibility', () => {
    const wrapper = mount(HeaderMenu);
    const menuIcon = wrapper.find('.header__menu img');

    menuIcon.trigger('click');
    expect(wrapper.vm.isMenuOpen).toBe(true);

    menuIcon.trigger('click');
    expect(wrapper.vm.isMenuOpen).toBe(false);
  })
})