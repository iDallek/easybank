import TheHeader from '../TheHeader.vue';
import { describe, expect, it } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';

describe('TheHeader', () => {
  it('Should render Header Menu with Logo and menu elements', () => {
    const wrapper = mount(TheHeader);

    expect(wrapper.find('.header__logo').exists()).toBe(true);
    expect(wrapper.find('.header__menu').exists()).toBe(true);
  })
  
  it('Should click on hamburger menu icon toggles menu visibility', () => {
    const wrapper = mount(TheHeader);
    const menuIcon = wrapper.find('.header__menu img');

    menuIcon.trigger('click');
    expect(wrapper.vm.isMenuOpen).toBe(true);

    menuIcon.trigger('click');
    expect(wrapper.vm.isMenuOpen).toBe(false);
  })

  it('Should items in menu are rendered when menu is open', async () => {
    const wrapper = shallowMount(TheHeader);
    wrapper.setData({ isMenuOpen: true });

    await wrapper.vm.$nextTick();

    const menuItems = wrapper.findAll('[data-test="menu__item"]');
    expect(menuItems.length).toBeGreaterThan(0);
  })

  it('Should items in menu are not rendered when menu is closed', async () => {
    const wrapper = shallowMount(TheHeader);
    wrapper.setData({ isMenuOpen: false });

    await wrapper.vm.$nextTick();

    const menuItems = wrapper.findAll('.menu__item');
    expect(menuItems.length).toBe(0);
  })
})