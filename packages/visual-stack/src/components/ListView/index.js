import React from 'react';
import { isNil } from 'ramda';
import classNames from 'classnames';
import './style.css';

export default ({
  data,
  renderContent,
  onClick,
  renderHeader: Header,
  renderFooter: Footer,
}) => {
  const isClickable = !isNil(onClick);
  return (
    <div>
      {Header && (
        <div className="vs-list-view-header">
          <Header />
        </div>
      )}
      <div className="vs-list-view">
        {data.map((item, index) => (
          <div
            key={item.id || index}
            className={classNames({
              'vs-list-item': true,
              'vs-list-item-clickable': isClickable,
            })}
            onClick={isClickable ? () => onClick(item) : undefined}
          >
            {renderContent(item)}
          </div>
        ))}
      </div>
      {Footer && (
        <div className="vs-list-view-footer">
          <Footer />
        </div>
      )}
    </div>
  );
};
