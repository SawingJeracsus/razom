// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

//@ts-ignore
global.shallow = shallow;
//@ts-ignore
global.render = render;
//@ts-ignore
global.mount = mount;
//@ts-ignore
global.toJson = toJson;

// Fail tests on any warning
console.error = message => {
    throw new Error(message);
};
