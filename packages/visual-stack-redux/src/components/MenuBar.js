import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as Base from '@cjdev/visual-stack/lib/components/MenuBar';

import { openDropdown, closeDropdown } from '../index.js';

export class MenuBar extends Component {
  static childContextTypes = {
    menuBarName: PropTypes.string,
  };

  getChildContext() {
    return {
      menuBarName: this.props.name,
    };
  }

  render() {
    const { children, name: _name, ...otherProps } = this.props;
    return <Base.MenuBar {...otherProps}>{children}</Base.MenuBar>;
  }
}

class InternalMenuBarDropdown extends Component {
  constructor() {
    super();
    this.handleClick = e => {
      const node = ReactDOM.findDOMNode(this);
      const { menuBarName } = this.context;
      const { name, closeDropdown, openDropdown } = this.props;

      if (node.contains(e.target)) {
        openDropdown(menuBarName, name);
      } else {
        closeDropdown(menuBarName, name);
      }
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  render() {
    const { children, menuBars, name, closeDropdown: _closeDropdown, openDropdown: _openDropdown, ...otherProps } = this.props;
    const { menuBarName } = this.context;
    const dropDownState = (menuBars[menuBarName] || {})[name] || {};
    return (
      <Base.MenuBarDropdown open={dropDownState.open} {...otherProps}>
        {children}
      </Base.MenuBarDropdown>
    );
  }
}

export const MenuBarDropdown = connect(
  state => ({ menuBars: state.visualStack.menuBar }),
  { openDropdown, closeDropdown }
)(InternalMenuBarDropdown);

export const MenuBarItem = Base.MenuBarItem;
export const MenuBarDropdownItem = Base.MenuBarDropdownItem;
