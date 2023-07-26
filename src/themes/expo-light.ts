import { darkTheme, lightTheme, palette } from '@expo/styleguide-base';

import { makeTheme } from '../blueprint';

export default makeTheme({
  colors: {
    'activityBar.background': lightTheme.background.subtle,
    'activityBar.border': lightTheme.border.secondary,
    'activityBar.foreground': lightTheme.text.secondary,
    'activityBar.activeBackground': lightTheme.background.selected,
    'activityBarBadge.background': palette.light.blue9,
    'badge.background': lightTheme.button.primary.background,
    'badge.foreground': lightTheme.button.primary.text,
    'breadcrumb.background': lightTheme.background.screen,
    'button.background': lightTheme.button.primary.background,
    'editor.background': lightTheme.background.default,
    'editor.border': lightTheme.background.default,
    'editorBracketHighlight.foreground1': lightTheme.text.quaternary,
    'editorBracketHighlight.foreground2': lightTheme.text.quaternary,
    'editorBracketHighlight.foreground3': lightTheme.text.quaternary,
    'editorBracketHighlight.foreground4': lightTheme.text.quaternary,
    'editorBracketHighlight.foreground5': lightTheme.text.quaternary,
    'editorBracketHighlight.foreground6': lightTheme.text.quaternary,
    'editorBracketHighlight.unexpectedBracket.foreground': lightTheme.text.quaternary,
    'editorGroup.border': lightTheme.border.secondary,
    'editorGroupHeader.border': lightTheme.background.element,
    'editorGroupHeader.tabsBackground': lightTheme.background.element,
    'editorGutter.foldingControlForeground': lightTheme.icon.secondary,
    'editorLineNumber.foreground': lightTheme.text.quaternary,
    'editor.wordHighlightBackground': lightTheme.background.hover,
    'editorWidget.background': lightTheme.background.default,
    'editor.selectionBackground': lightTheme.background.hover,
    focusBorder: '#00000000',
    'list.activeSelectionBackground': lightTheme.background.selected,
    'list.activeSelectionBorder': '#00000000',
    'list.focusOutline': '#00000000',
    'list.focusBackground': lightTheme.background.selected,
    'list.hoverBackground': lightTheme.background.hover,
    'list.inactiveSelectionBackground': lightTheme.background.element,
    'list.activeSelectionForeground': lightTheme.text.default,
    'input.background': lightTheme.background.element,
    'inputOption.activeBackground': lightTheme.background.info,
    'inputOption.activeForeground': lightTheme.text.info,
    'panel.background': lightTheme.background.screen,
    'panel.border': lightTheme.border.secondary,
    'panelTitle.activeBorder': lightTheme.button.tertiary.text,
    'peekView.border': lightTheme.border.default,
    'peekViewEditor.background': lightTheme.background.subtle,
    'peekViewResult.background': lightTheme.background.default,
    'peekViewResult.selectionBackground': lightTheme.background.selected,
    'peekViewResult.lineForeground': lightTheme.text.tertiary,
    'peekViewResult.matchHighlightBackground': palette.light.blue4,
    'peekViewTitleDescription.foreground': lightTheme.text.tertiary,
    'pickerGroup.foreground': lightTheme.text.tertiary,
    'pickerGroup.border': lightTheme.border.secondary,
    'scrollbarSlider.background': lightTheme.background.hover,
    'scrollbarSlider.hoverBackground': lightTheme.background.selected,
    'scrollbarSlider.activeBackground': palette.light.gray7,
    'sideBar.background': lightTheme.background.screen,
    'sideBar.border': lightTheme.border.secondary,
    'sideBar.foreground': lightTheme.text.secondary,
    'sideBarSectionHeader.background': lightTheme.background.screen,
    'sideBarSectionHeader.border': lightTheme.background.default,
    'sideBarTitle.foreground': lightTheme.text.tertiary,
    'statusBar.background': lightTheme.background.screen,
    'statusBar.border': lightTheme.border.default,
    'statusBar.foreground': lightTheme.text.secondary,
    'statusBar.debuggingBackground': palette.light.orange8,
    'statusBar.debuggingBorder': palette.light.orange8,
    'statusBar.debuggingForeground': palette.white,
    'statusBar.noFolderBackground': palette.light.purple8,
    'statusBar.noFolderBorder': palette.light.purple8,
    'statusBar.noFolderForeground': palette.white,
    'statusBarItem.remoteBackground': lightTheme.button.primary.background,
    'tab.border': lightTheme.background.hover,
    'tab.activeBackground': lightTheme.background.screen,
    'tab.inactiveBackground': lightTheme.background.element,
    'titleBar.activeBackground': lightTheme.background.element,
    'titleBar.inactiveBackground': lightTheme.background.element,
    'titleBar.border': lightTheme.border.secondary,
    'tree.indentGuidesStroke': '#00000000',
  },
  tokenColors: {
    'comment.line': lightTheme.text.tertiary,
    'comment.block': lightTheme.text.tertiary,

    'constant.numeric': lightTheme.text.warning,
    'constant.language': palette.light.pink10,
    'constant.other.variable': palette.light.green11,

    'editorBracketMatch.border': lightTheme.text.quaternary,

    'entity.name.tag': palette.light.orange10,
    'entity.name.type': palette.light.green11,
    'entity.name.type.class': palette.light.blue11,
    'entity.name.type.module': palette.light.blue11,
    'entity.other': palette.light.blue11,
    'entity.other.attribute-name': palette.light.red10,
    'entity.scope.name': palette.light.blue10,

    'keyword.control': palette.light.purple11,
    'keyword.control.flow': palette.light.pink10,
    'keyword.control.new': palette.light.orange10,
    'keyword.other': palette.light.pink10,
    'keyword.operator': lightTheme.text.tertiary,
    'keyword.operator.assignment': lightTheme.text.quaternary,
    'keyword.operator.expression': palette.light.orange10,
    'keyword.operator.logical': lightTheme.text.tertiary,
    'keyword.operator.rest': lightTheme.text.quaternary,
    'keyword.operator.spread': lightTheme.text.quaternary,
    'keyword.operator.type.annotation': lightTheme.text.quaternary,
    'keyword.operator.ternary': lightTheme.text.tertiary,
    'keyword.operator.new': palette.dark.orange10,

    'meta.brace': lightTheme.text.quaternary,
    'meta.definition.variable': lightTheme.text.default,
    'meta.definition.function': palette.light.blue11,
    'meta.function-call': palette.light.purple11,
    'meta.import': lightTheme.text.default,
    'meta.object-literal.key': lightTheme.text.default,

    'punctuation.accessor': lightTheme.text.quaternary,
    'punctuation.bracket': lightTheme.text.quaternary,
    'punctuation.definition': lightTheme.text.quaternary,
    'punctuation.definition.annotation': lightTheme.text.warning,
    'punctuation.definition.block': lightTheme.text.quaternary,
    'punctuation.definition.parameters': lightTheme.text.quaternary,
    'punctuation.definition.string': lightTheme.text.quaternary,
    'punctuation.section': lightTheme.text.quaternary,
    'punctuation.separator': lightTheme.text.quaternary,
    'punctuation.separator.dot-access': lightTheme.text.quaternary,
    'punctuation.terminator.statement': lightTheme.text.quaternary,

    'storage.modifier': palette.light.red10,
    'storage.modifier.import': lightTheme.text.secondary,
    'storage.type': palette.light.pink10,
    'storage.type.annotation': lightTheme.text.warning,
    'storage.type.generic': palette.light.blue10,
    'storage.type.function.arrow': lightTheme.text.quaternary,

    'string.quoted': '#C07F00',
    'string.template': '#C07F00',

    'support.type.primitive': palette.light.orange10,
    'support.type.property-name': palette.light.orange10,
    'support.type.builtin': palette.light.pink10,

    'variable.object.property': lightTheme.text.default,
    'variable.other': lightTheme.text.default,
    'variable.other.constant': palette.light.blue11,
    'variable.other.macro.argument': palette.light.pink10,
    'variable.parameter.probably': palette.light.blue11,
    'variable.language': palette.light.pink10,

    // Language-specific overwrites

    'source.ignore': {},

    'source.java': {
      'entity.name.function': palette.dark.blue11,
      'keyword.control.new': palette.light.red10,
      'storage.modifier': palette.light.orange10,
      'storage.modifier.extends': palette.light.pink10,
      'storage.modifier.implements': palette.light.pink10,
      'storage.type': palette.light.green11,
      'storage.type.primitive': palette.light.pink10,
      'storage.type.generic': palette.light.green11,
      'punctuation.terminator': lightTheme.text.tertiary,
    },

    'source.js': {},

    'source.jsx': {},

    'source.json': {},

    'source.kotlin': {
      'keyword.control.new': palette.light.red10,
      'storage.modifier': palette.light.orange10,
      'variable.parameter.function': palette.light.yellow11,
      'entity.other.inherited-class': palette.light.purple11,
      'punctuation.seperator': lightTheme.text.tertiary,
    },

    'text.html.markdown': {
      'fenced_code.block.language': palette.light.purple11,
      'markup.bold': palette.light.pink10,
      'markup.italic': palette.light.green11,
      'markup.strikethrough': palette.light.red10,
      'markup.inline.raw.string': palette.light.yellow11,
      'markup.underline.link': palette.light.blue11,
      'meta.paragraph': lightTheme.text.default,
      'punctuation.definition.heading.markdown': palette.light.blue10,
      'string.other.link.title': palette.light.green11,
      'meta.separator': lightTheme.text.tertiary,
    },

    'source.mdx': {
      'meta.paragraph': lightTheme.text.default,
      'punctuation.definition.heading': palette.light.blue10,
      'string.other.begin.code.fenced': lightTheme.text.tertiary,
      'string.other.end.code.fenced': lightTheme.text.tertiary,
      'variable.ordered.list': lightTheme.text.tertiary,
      'variable.unordered.list': lightTheme.text.tertiary,
      'markup.code': palette.light.purple11,
      'string.other.number': lightTheme.text.tertiary,
      'meta.separator': lightTheme.text.tertiary,
      'support.class.component': palette.light.orange10,
    },

    'source.objc': {
      'entity.name.function': palette.light.blue11,
      'entity.name.function.preprocessor': palette.light.orange10,
      'keyword.other.property.attribute': palette.light.orange10,
      'meta.bracketed': palette.light.pink10,
      'meta.function-call': lightTheme.text.default,
      'storage.type': palette.light.red10,
      'support.class.cocoa': palette.light.green11,
      'support.other.protocol': palette.light.orange10,
    },

    'source.ruby': {
      'constant.other.symbol.hashkey': palette.light.green11,
      'entity.name.function': palette.light.blue11,
      'support.class': palette.light.orange10,
      'variable.parameter.function': palette.light.green11,
    },

    'source.shell': {
      'entity.name.command': palette.light.blue11,
      'support.function.builtin': palette.light.pink10,
    },

    'source.swift': {
      'entity.name.type': palette.light.blue11,
      'support.function.any-method': palette.light.blue11,
      'keyword.control.new': palette.light.red10,
      'meta.parameter-clause': palette.light.green11,
      'meta.function-call': lightTheme.text.default,
      'entity.name.function': palette.light.blue11,
      'meta.definition.function.body': lightTheme.text.default,
      'meta.definition.type.body': lightTheme.text.default,
      'meta.inheritance-clause': palette.light.orange10,
      'punctuation.definition.attribute': palette.light.orange10,
      'storage.modifier': palette.light.orange10,
      'support.type': palette.light.green11,
      'support.function': palette.light.purple11,
      'variable.parameter.function': palette.light.yellow11,
    },

    'source.ts': {
      'punctuation.definition.block.tag.jsdoc': palette.light.orange10,
      'storage.type.class.jsdoc': palette.light.orange10,
    },

    'source.tsx': {
      'punctuation.definition.block.tag.jsdoc': palette.light.orange10,
      'storage.type.class.jsdoc': palette.light.orange10,
    },

    'text.xml': {
      'entity.other.attribute-name.localname': palette.light.blue11,
    },

    'source.yaml': {},
  },
});
