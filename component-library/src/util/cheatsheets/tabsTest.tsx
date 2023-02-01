import React from 'react'
import { TabExample } from '../../components/tabs';
import { TABS_MOCK_DATA } from '../../components/tabs/util/tabs.data';

describe('Creating Semantic & Accessible Tabs Through TDD', () => {
  beforeEach(() => {
    cy.viewport(900, 600)
    cy.mount(
      <TabExample
				{...TABS_MOCK_DATA}
			/>
    );
  });
    
  it('Should have a TabExampleContainer Elements', () => {
    // Should have a section with correct aria-labelledby attribute
    cy.get('section[data-cy=tabs-example]').should('have.attr', 'aria-labelledby', 'tab-example-container');
    // Should have a header with an id that corresponds to the TabExampleContainer aria-labelledby value
    cy.get('h1').should('have.id', 'tab-example-container');
  })
  
  it('Should have a Tabs List and Corresponding Elements', () => {
    // Should have a nav with correct aria-labelledby attribute
    cy.get('nav[role=tablist]').should('have.attr', 'aria-labelledby', 'tabs-navigation');
    // Should have a label with an id that corresponds to the nav aria-labelledby value
    cy.get('label').should('have.id', 'tabs-navigation');
  });
  
  it('Should have Tab Elements', () => {
    // Should have button elements each with correct attributes, labels, and roles
    cy.get('button[role=tab]').each((el, i) => {
      // should have correct aria-selected and tabindex
      if (i === 0) {
        expect(el).to.have.attr('aria-selected', 'true');
      } else {
        expect(el).to.have.attr('aria-selected', 'false');
        expect(el).to.have.attr('tabindex', '-1');
      }
  
      // aria-controls should correspond to a tabpanel with matching id
      cy.wrap(el)
        .invoke('attr', 'aria-controls')
        .then((ariaControls) => {
          cy.get(`#${ariaControls}`)
            .should('exist')
            .and('have.attr', 'role', 'tabpanel');
        });
  
      // this should be used to label the tabpanel
      cy.wrap(el)
        .invoke('attr', 'id')
        .then((id) => {
          cy.get(`[aria-labelledby=${id}]`)
            .should('exist')
            .and('have.attr', 'role', 'tabpanel');
        });
    });
  });
  
  it('Should have Tab Panel Elements', () => {
    // Should have tabpanel elements each with correct attributes, labels, and roles
    cy.get(`[role=tabpanel]`).each((el) => {
      // tabpanel should be controlled by correct tab
      cy.wrap(el)
        .invoke('attr', 'id')
        .then((id) => {
          cy.get(`[aria-controls=${id}]`)
            .should('exist')
            .and('have.attr', 'role', 'tab');
        });
  
      // tabpanel should be labeled by correct tab id
      cy.wrap(el)
        .invoke('attr', 'aria-labelledby')
        .then((ariaLabelledby) => {
          cy.get(`#${ariaLabelledby}`)
            .should('exist')
            .and('have.attr', 'role', 'tab');
        });
    });
  });

  it('Should have Correct Keyboard Interactions', () => {
    // right, left, down, and up arrows move focus to the next/previous tab
    cy.get('[role=tab]').first().focus().type('{rightArrow}');
    cy.get('[role=tab]').eq(1).should('be.focused').type('{leftArrow}');
    cy.get('[role=tab]').first().should('be.focused').type('{downArrow}');
    cy.get('[role=tab]').eq(1).should('be.focused').type('{upArrow}');
    cy.get('[role=tab]').first().should('be.focused');

    // home/end keys move focus to the first/last tabs
    cy.get('[role=tab]').first().focus().type('{end}');
    cy.get('[role=tab]').last().should('be.focused').type('{home}');
    cy.get('[role=tab]').first().should('be.focused');

    // the enter key activates the tab
    cy.get('[role=tab]').eq(1).type('{enter}');
    cy.get('[role=tabpanel]').each((tabpanel, index) => {
      if (index === 1) {
        cy.wrap(tabpanel).should('be.visible');
      } else {
        cy.wrap(tabpanel).should('not.be.visible');
      }
    });
  });

  it('Should have Correct Mouse Interactions', () => {
    cy.get('[role=tab]').each((primaryTab, primaryIndex) => {
      cy.wrap(primaryTab)
        .click()
        .invoke('attr', 'aria-controls')
        .then((id) => {
          cy.get('[role=tab]').each((secondaryTab, secondaryIndex) => {
            // should have correct aria-selected and tabindex
            if (primaryIndex === secondaryIndex) {
              expect(secondaryTab).to.have.attr('aria-selected', 'true');
            } else {
              expect(secondaryTab).to.have.attr('aria-selected', 'false');
              expect(secondaryTab).to.have.attr('tabindex', '-1');
            }
          });
          // Check to see if expected panel is visible
          cy.get(`#${id}`)
            .should('be.visible')
            .and('have.attr', 'role', 'tabpanel');
        });
    });
  });
});


// TAB
{/* <Button
  aria-controls={`panel-${id}`}
  aria-selected={activeTab === id ? true : false}
  className={className}
  css={emoCSS}
  data-cy={dataCy}
  id={id}
  onClick={() => setActiveTab(id)}
  onKeyDown={keyDownHandler}
  ref={ref}
  role="tab"
  tabIndex={activeTab === id ? undefined : -1}
>
  {children}
</Button> */}

// TAB PANEL
{/* <TabPanel
  aria-labelledby={id}
  className={className}
  data-cy={dataCy}
  id={`panel-${id}`}
  role="tabpanel"
  tabIndex={0}
  css={css`
    ${FOCUS_STYLES}
    display: ${isActive ? "block" : "none"};
    ${emoCSS}
  `}
  >
  {children}
</TabPanel> */}
