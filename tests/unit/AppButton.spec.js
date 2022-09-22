import { shallowMount } from '@vue/test-utils';
import AppButton from '@/components/Button/AppButton.vue';
import { nextTick } from 'vue';
import IconSvg from '@/components/Icon/IconSvg.vue';

describe('AppButton', () => {
  let wrapper;

  const createComponent = (props = {}) => {
    wrapper = shallowMount(AppButton, {
      propsData: props,
    });
  };

  const BUTTON_LABEL = 'Button';
  const BUTTON_ICON_NAME = 'arrow-left';

  afterEach(() => {
    wrapper.unmount();
  });

  it('Should render label when props.label passed', () => {
    createComponent({ label: BUTTON_LABEL });
    expect(wrapper.text()).toContain(BUTTON_LABEL);
  });

  it('Should emits click when button click', async () => {
    createComponent({ label: BUTTON_LABEL });
    wrapper.trigger('click');
    await nextTick();

    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('Should not render icon when props.icon not passed', () => {
    createComponent({ label: BUTTON_LABEL });

    expect(wrapper.findComponent(IconSvg).exists()).toBeFalsy();
  });

  it('Should render icon when props.icon passed', () => {
    createComponent({ label: BUTTON_LABEL, icon: BUTTON_ICON_NAME, iconPosition: 'end' });
    expect(wrapper.findComponent(IconSvg).exists()).toBeTruthy();
    expect(wrapper.findAllComponents(IconSvg)).toHaveLength(1);
  });
});
