"use client";

import React, { Children, isValidElement } from "react";
import clsx from "clsx";

interface StickyTabItemProps {
  title: React.ReactNode;
  id: string | number;
  children: React.ReactNode;
  contentClassName?: string;
}

const StickyTabItem: React.FC<StickyTabItemProps> = () => {
  return null;
};

interface StickyTabsProps {
  children: React.ReactNode;
  mainNavHeight?: string;
  rootClassName?: string;
  navSpacerClassName?: string;
  sectionClassName?: string;
  stickyHeaderContainerClassName?: string;
  headerContentWrapperClassName?: string;
  headerContentLayoutClassName?: string;
  titleClassName?: string;
  contentLayoutClassName?: string;
}

const StickyTabs: React.FC<StickyTabsProps> & {
  Item: React.FC<StickyTabItemProps>;
} = ({
  children,
  mainNavHeight = "6em",
  rootClassName = "bg-black text-white",
  navSpacerClassName = "border-b border-white/15 bg-black",
  sectionClassName = "bg-[#0c0c0b]",
  stickyHeaderContainerClassName = "shadow-lg",
  headerContentWrapperClassName = "border-b border-t border-white/15 bg-black",
  headerContentLayoutClassName = "mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8",
  titleClassName = "my-0 text-2xl font-medium leading-none md:text-3xl lg:text-4xl",
  contentLayoutClassName = "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
}) => {
    const stickyTopValue = `calc(${mainNavHeight} - 1px)`;
    const stickyHeaderStyle = { top: stickyTopValue };

    return (
      <div className={clsx("overflow-clip", rootClassName)}>
        {/* Scroll mask: hides content as it scrolls behind the navbar.
            Negative bottom margin cancels its layout height (no visual gap). */}
        <div
          className={clsx("sticky left-0 top-0 z-10 w-full", navSpacerClassName)}
          style={{ height: mainNavHeight, marginBottom: `calc(-1 * ${mainNavHeight})` }}
          aria-hidden="true"
        />
        {Children.map(children, (child) => {
          if (!isValidElement(child) || child.type !== StickyTabItem) {
            return null;
          }

          const itemElement = child as React.ReactElement<StickyTabItemProps>;
          const {
            title,
            id,
            children: itemContent,
            contentClassName,
          } = itemElement.props;

          return (
            <section
              key={id}
              className={clsx("relative overflow-clip", sectionClassName)}
            >
              <div
                className={clsx(
                  "sticky z-20 -mt-px flex flex-col",
                  stickyHeaderContainerClassName,
                )}
                style={stickyHeaderStyle}
              >
                <div className={clsx(headerContentWrapperClassName)}>
                  <div className={clsx(headerContentLayoutClassName)}>
                    <div className="flex items-center justify-between">
                      <h2 className={clsx(titleClassName)}>{title}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className={clsx(contentLayoutClassName, contentClassName)}>
                {itemContent}
              </div>
            </section>
          );
        })}
      </div>
    );
  };

StickyTabs.Item = StickyTabItem;

export default StickyTabs;
