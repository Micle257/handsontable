/**
 * @preserve
 * Authors: Michal Pokorný
 * Last updated: Sep 11, 2018
 *
 * Description: Definition file for Czech - Czechia language-country.
 */
import * as C from '../constants';

const dictionary = {
  languageCode: 'cs-CZ',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Vložit řádek nad',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: 'Vložit řádek pod',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: 'Vložit sloupec vlevo',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: 'Vložit sloupec vpravo',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Odstranit řádek', 'Odstranit řádky'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Odstranit sloupec', 'Odstranit sloupce'],
  [C.CONTEXTMENU_ITEMS_UNDO]: 'Zpět',
  [C.CONTEXTMENU_ITEMS_REDO]: 'Znova',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: 'Jen pro čtení',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: 'Vyprázdnit sloupec',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: 'Zarovnání',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: 'Vlevo',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: 'Na střed',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: 'Vpravo',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: 'Do bloku',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: 'Nahoru',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: 'Uprosřed',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: 'Dole',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: 'Zamrazit sloupec',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: 'Odmrazit sloupec',

  [C.CONTEXTMENU_ITEMS_BORDERS]: 'Rámeček',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: 'Nahoře',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: 'Vpravo',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: 'Dole',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: 'Nalevo',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: 'Odstranit rámeček',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: 'Přidat komentář',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: 'Upravit komentář',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: 'Vymazat komentář',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: 'Komentář je jen pro čtení',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: 'Sjednotit buňky',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: 'Rozpustit buňky',

  [C.CONTEXTMENU_ITEMS_COPY]: 'Kopírovat',
  [C.CONTEXTMENU_ITEMS_CUT]: 'Vyjmout',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: 'Vložit podřádek',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: 'Posunout v hierarchii nahoru',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['Schovat sloupec', 'Schovat sloupce'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['Zobrazit sloupec', 'Zobrazit sloupce'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['Schovat řádek', 'Schovat řádky'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['Zobrazit řádek', 'Zobrazit řádky'],

  [C.FILTERS_CONDITIONS_NONE]: 'None',
  [C.FILTERS_CONDITIONS_EMPTY]: 'Is empty',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: 'Is not empty',
  [C.FILTERS_CONDITIONS_EQUAL]: 'Is equal to',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: 'Is not equal to',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: 'Begins with',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: 'Ends with',
  [C.FILTERS_CONDITIONS_CONTAINS]: 'Contains',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: 'Does not contain',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: 'Greater than',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: 'Greater than or equal to',
  [C.FILTERS_CONDITIONS_LESS_THAN]: 'Less than',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: 'Less than or equal to',
  [C.FILTERS_CONDITIONS_BETWEEN]: 'Is between',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: 'Is not between',
  [C.FILTERS_CONDITIONS_AFTER]: 'After',
  [C.FILTERS_CONDITIONS_BEFORE]: 'Before',
  [C.FILTERS_CONDITIONS_TODAY]: 'Today',
  [C.FILTERS_CONDITIONS_TOMORROW]: 'Tomorrow',
  [C.FILTERS_CONDITIONS_YESTERDAY]: 'Yesterday',

  [C.FILTERS_VALUES_BLANK_CELLS]: 'Blank cells',

  [C.FILTERS_DIVS_FILTER_BY_CONDITION]: 'Filter by condition',
  [C.FILTERS_DIVS_FILTER_BY_VALUE]: 'Filter by value',

  [C.FILTERS_LABELS_CONJUNCTION]: 'And',
  [C.FILTERS_LABELS_DISJUNCTION]: 'Or',

  [C.FILTERS_BUTTONS_SELECT_ALL]: 'Select all',
  [C.FILTERS_BUTTONS_CLEAR]: 'Clear',
  [C.FILTERS_BUTTONS_OK]: 'OK',
  [C.FILTERS_BUTTONS_CANCEL]: 'Cancel',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: 'Search',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: 'Value',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: 'Second value'
};

export default dictionary;
