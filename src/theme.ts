import { toArray } from "@antfu/utils";
import { getColors } from "./primer";
import { Fthemes } from "./colors";

export default function getTheme({ style, name }) {
  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = (options) => options[style];

  const ft = (key: keyof typeof Fthemes, op = "") =>
    pick({ light: Fthemes[key][1] + op, dark: Fthemes[key][0] + op });

  const primer = getColors(style);

  const foreground = ft("foreground");
  const secondaryForeground = ft("secondaryForeground");
  const activeForeground = ft("activeForeground");
  const primary = ft("primary");

  const border = ft("border");
  const background = ft("background");
  const activeBackground = ft("activeBackground");

  const selectionBackgroundInActive = pick({
    light: "#efd5bf",
    dark: "#31322c",
  });
  const selectionBackgroundActive = pick({ light: "#efd5bf", dark: "#31322c" });
  const selectionBackground = pick({ light: "#f1dabe", dark: "#31322c" });

  const theme = {
    name,
    base: pick({ light: "vs", dark: "vs-dark" }),
    colors: {
      focusBorder: "#00000000",
      foreground,
      descriptionForeground: secondaryForeground,
      errorForeground: ft("red"),

      "textLink.foreground": primary,
      "textLink.activeForeground": primary,
      "textBlockQuote.background": background,
      "textBlockQuote.border": border,
      "textCodeBlock.background": background,
      "textPreformat.foreground": primer.gray[6],
      "textSeparator.foreground": primer.gray[3],

      "button.background": primary,
      "button.foreground": background,
      "button.hoverBackground": primary,

      "checkbox.background": activeBackground,
      "checkbox.border": pick({ light: primer.gray[3], dark: primer.gray[1] }),

      "dropdown.background": background,
      "dropdown.border": border,
      "dropdown.foreground": foreground,
      "dropdown.listBackground": activeBackground,

      "input.background": activeBackground,
      "input.border": border,
      "input.foreground": foreground,
      "input.placeholderForeground": secondaryForeground,
      "inputOption.activeBackground": ft("ignored"),

      "badge.foreground": background,
      "badge.background": secondaryForeground,

      "progressBar.background": primary,

      "titleBar.activeForeground": activeForeground,
      "titleBar.activeBackground": background,
      "titleBar.inactiveForeground": primer.gray[5],
      "titleBar.inactiveBackground": background,
      "titleBar.border": activeBackground,

      "activityBar.foreground": foreground,
      "activityBar.inactiveForeground": ft("ignored"),
      "activityBar.background": background,
      "activityBarBadge.foreground": background,
      "activityBarBadge.background": activeForeground,
      "activityBar.activeBorder": primary,
      "activityBar.border": border,

      "sideBar.foreground": activeForeground,
      "sideBar.background": background,
      "sideBar.border": border,
      "sideBarTitle.foreground": foreground,
      "sideBarSectionHeader.foreground": foreground,
      "sideBarSectionHeader.background": background,
      "sideBarSectionHeader.border": border,

      "list.hoverForeground": foreground,
      "list.inactiveSelectionForeground": foreground,
      "list.activeSelectionForeground": foreground,
      "list.hoverBackground": activeBackground,
      "list.inactiveSelectionBackground": activeBackground,
      "list.activeSelectionBackground": activeBackground,
      "list.inactiveFocusBackground": background,
      "list.focusBackground": activeBackground,

      "tree.indentGuidesStroke": pick({
        light: primer.gray[2],
        dark: primer.gray[1],
      }),

      "notificationCenterHeader.foreground": primer.gray[5],
      "notificationCenterHeader.background": background,
      "notifications.foreground": foreground,
      "notifications.background": background,
      "notifications.border": border,
      "notificationsErrorIcon.foreground": ft("red"),
      "notificationsWarningIcon.foreground": ft("orange"),
      "notificationsInfoIcon.foreground": ft("blue"),

      "pickerGroup.border": primer.gray[2],
      "pickerGroup.foreground": foreground,
      "quickInput.background": background,
      "quickInput.foreground": foreground,

      "statusBar.foreground": activeForeground,
      "statusBar.background": background,
      "statusBar.border": border,
      "statusBar.noFolderBackground": background,
      "statusBar.debuggingBackground": activeBackground,
      "statusBar.debuggingForeground": activeForeground,
      "statusBarItem.prominentBackground": activeBackground,

      "editorGroupHeader.tabsBackground": background,
      "editorGroupHeader.tabsBorder": border,
      "editorGroup.border": border,

      "tab.activeForeground": foreground,
      "tab.inactiveForeground": primer.gray[5],
      "tab.inactiveBackground": background,
      "tab.activeBackground": background,
      "tab.hoverBackground": activeBackground,
      "tab.unfocusedHoverBackground": background,
      "tab.border": border,
      "tab.unfocusedActiveBorderTop": border,
      "tab.activeBorder": border,
      "tab.unfocusedActiveBorder": border,
      "tab.activeBorderTop": secondaryForeground,

      "breadcrumb.foreground": primer.gray[5],
      "breadcrumb.focusForeground": foreground,
      "breadcrumb.background": activeBackground,
      "breadcrumb.activeSelectionForeground": selectionBackgroundActive,
      "breadcrumbPicker.background": background,

      "editor.foreground": foreground,
      "editor.background": background,
      "editorWidget.background": background,
      "editor.foldBackground": pick({ light: "#22222210", dark: "#eeeeee10" }),
      "editor.lineHighlightBackground": activeBackground,
      "editorLineNumber.foreground": ft("ignored"),
      "editorLineNumber.activeForeground": activeForeground,
      "editorIndentGuide.background": pick({
        light: "#00000015",
        dark: "#ffffff15",
      }),
      "editorIndentGuide.activeBackground": pick({
        light: "#00000030",
        dark: "#ffffff30",
      }),
      "editorWhitespace.foreground": pick({
        light: "#00000015",
        dark: "#ffffff15",
      }),
      // 'editorCursor.foreground': primary,

      "editor.findMatchBackground": pick({
        light: "#e6cc7744",
        dark: "#453036",
      }),
      "editor.findMatchHighlightBackground": pick({
        light: "#e6cc7766",
        dark: "#2e2c2c",
      }),
      "editor.inactiveSelectionBackground": selectionBackgroundInActive,
      "editor.selectionBackground": selectionBackground,
      "editor.selectionHighlightBackground": selectionBackgroundInActive,
      "editor.wordHighlightBackground": pick({
        light: "#1c6b4805",
        dark: "#1c6b4805",
      }),
      "editor.wordHighlightStrongBackground": pick({
        light: "#1c6b4810",
        dark: "#1c6b4810",
      }),
      "editorBracketMatch.background": pick({
        light: "#1c6b4820",
        dark: "#4d937520",
      }),

      "diffEditor.insertedTextBackground": pick({
        light: "#1c6b4815",
        dark: "#4d937522",
      }),
      "diffEditor.removedTextBackground": pick({
        light: "#ab595910",
        dark: "#ab595922",
      }),

      "scrollbar.shadow": pick({ light: "#6a737d33", dark: "#0000" }),
      "scrollbarSlider.background": ft("faded"),
      "scrollbarSlider.hoverBackground": ft("ignored"),
      "scrollbarSlider.activeBackground": ft("ignored"),
      "editorOverviewRuler.border": primer.white,

      "panel.background": background,
      "panel.border": border,
      "panelTitle.activeBorder": primary,
      "panelTitle.activeForeground": foreground,
      "panelTitle.inactiveForeground": primer.gray[5],
      "panelInput.border": pick({
        light: primer.gray[2],
        dark: primer.gray[1],
      }),

      "terminal.foreground": foreground,
      "terminal.selectionBackground": selectionBackground,
      "terminal.ansiBrightBlack": pick({ light: "#aaaaaa", dark: "#777777" }),
      "terminal.ansiBrightBlue": ft("blue"),
      "terminal.ansiBrightCyan": ft("cyan"),
      "terminal.ansiBrightGreen": ft("green"),
      "terminal.ansiBrightMagenta": ft("magenta"),
      "terminal.ansiBrightRed": ft("red"),
      "terminal.ansiBrightWhite": pick({ light: "#dddddd", dark: "#ffffff" }),
      "terminal.ansiBrightYellow": ft("yellow"),
      "terminal.ansiBlack": pick({
        light: Fthemes.background[0],
        dark: Fthemes.foreground[1],
      }),
      "terminal.ansiBlue": ft("blue"),
      "terminal.ansiCyan": ft("cyan"),
      "terminal.ansiGreen": ft("green"),
      "terminal.ansiMagenta": ft("magenta"),
      "terminal.ansiRed": ft("red"),
      "terminal.ansiWhite": pick({
        light: Fthemes.foreground[0],
        dark: Fthemes.foreground[0],
      }),
      "terminal.ansiYellow": ft("yellow"),

      "gitDecoration.addedResourceForeground": ft("green"),
      "gitDecoration.modifiedResourceForeground": ft("blue"),
      "gitDecoration.deletedResourceForeground": ft("red"),
      "gitDecoration.untrackedResourceForeground": ft("cyan"),
      "gitDecoration.ignoredResourceForeground": ft("ignored"),
      "gitDecoration.conflictingResourceForeground": ft("orange"),
      "gitDecoration.submoduleResourceForeground": ft("secondaryForeground"),

      "editorGutter.modifiedBackground": ft("blue"),
      "editorGutter.addedBackground": ft("green"),
      "editorGutter.deletedBackground": ft("red"),

      "editorBracketHighlight.foreground1": ft("cyan"),
      "editorBracketHighlight.foreground2": ft("green"),
      "editorBracketHighlight.foreground3": ft("orange"),
      "editorBracketHighlight.foreground4": ft("magenta"),
      "editorBracketHighlight.foreground5": ft("yellow"),
      "editorBracketHighlight.foreground6": ft("blue"),

      "debugToolBar.background": background,
      "editor.stackFrameHighlightBackground": pick({
        light: primer.yellow[1],
        dark: "#a707",
      }),
      "editor.focusedStackFrameHighlightBackground": pick({
        light: primer.yellow[2],
        dark: "#b808",
      }),

      "peekViewEditor.matchHighlightBackground": pick({ dark: "#ffd33d33" }),
      "peekViewResult.matchHighlightBackground": pick({ dark: "#ffd33d33" }),
      "peekViewEditor.background": background,
      "peekViewResult.background": background,

      "settings.headerForeground": foreground,
      "settings.modifiedItemIndicator": primary,
      "welcomePage.buttonBackground": primer.gray[1],
      "welcomePage.buttonHoverBackground": primer.gray[2],

      "problemsErrorIcon.foreground": ft("red"),
      "problemsWarningIcon.foreground": ft("orange"),
      "problemsInfoIcon.foreground": ft("blue"),

      "editorError.foreground": ft("red"),
      "editorWarning.foreground": ft("orange"),
      "editorInfo.foreground": ft("blue"),
      "editorHint.foreground": ft("green"),

      "editorGutter.commentRangeForeground": ft("ignored"),
      "editorGutter.foldingControlForeground": ft("secondaryForeground"),

      "editorInlayHint.foreground": ft("punctuation"),
      "editorInlayHint.background": "#00000000",

      "editorStickyScroll.background": activeBackground,
      "editorStickyScrollHover.background": activeBackground,
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: ft("namespace"),
      property: ft("property"),
      interface: ft("interface"),
      type: ft("interface"),
      class: ft("class"),
    },
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: ft("comment"),
        },
      },
      {
        scope: [
          "delimiter.bracket",
          "delimiter",
          "invalid.illegal.character-not-allowed-here.html",
          "keyword.operator.rest",
          "keyword.operator.spread",
          "keyword.operator.type.annotation",
          "keyword.operator.relational.ts",
          "meta.brace",
          "meta.tag.block.any.html",
          "meta.tag.inline.any.html",
          "meta.tag.structure.input.void.html",
          "meta.type.annotation",
          "storage.type.function.arrow",
          "keyword.operator.type",
          "meta.objectliteral.ts",
          "punctuation",
        ],
        settings: {
          foreground: ft("punctuation"),
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.language",
          "meta.definition.variable",
        ],
        settings: {
          foreground: ft("constant"),
        },
      },
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: ft("function"),
        },
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground,
        },
      },
      {
        scope: ["entity.name.tag", "tag.html"],
        settings: {
          foreground: ft("keyword"),
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: ft("function"),
        },
      },
      {
        scope: ["keyword", "storage.type.class.jsdoc"],
        settings: {
          foreground: ft("keyword"),
        },
      },
      {
        scope: [
          "storage",
          "storage.type",
          "support.type.builtin",
          "constant.language.undefined",
          "constant.language.null",
        ],
        settings: {
          foreground: ft("builtin"),
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground,
        },
      },
      {
        scope: [
          "string",
          "string punctuation.section.embedded source",
          "attribute.value",
        ],
        settings: {
          foreground: ft("string"),
        },
      },
      {
        scope: [
          "punctuation.definition.string",
          "punctuation.support.type.property-name",
        ],
        settings: {
          foreground: ft("string", "aa"),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: ft("property"),
        },
      },
      {
        scope: [
          "property",
          "meta.property-name",
          "meta.object-literal.key",
          "entity.name.tag.yaml",
          "attribute.name",
        ],
        settings: {
          foreground: ft("property"),
        },
      },
      {
        scope: [
          "entity.other.attribute-name",
          "invalid.deprecated.entity.other.attribute-name.html",
        ],
        settings: {
          foreground: ft("variable"),
        },
      },
      {
        scope: ["variable", "identifier"],
        settings: {
          foreground: ft("variable"),
        },
      },
      {
        scope: ["support.type.primitive", "entity.name.type"],
        settings: {
          foreground: ft("type"),
        },
      },
      {
        scope: "namespace",
        settings: {
          foreground: ft("namespace"),
        },
      },
      {
        scope: ["keyword.operator", "meta.var.expr.ts"],
        settings: {
          foreground: ft("operator"),
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: pick({ light: primer.red[5], dark: primer.red[6] }),
          foreground: primer.gray[0],
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: "string source",
        settings: {
          foreground,
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: ft("string"),
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: ft("regex"),
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: ft("string"),
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          foreground: ft("yellow"),
        },
      },
      {
        scope: ["support.constant"],
        settings: {
          foreground: ft("constant"),
        },
      },
      {
        scope: ["constant.numeric", "number"],
        settings: {
          foreground: ft("number"),
        },
      },
      {
        scope: ["keyword.other.unit"],
        settings: {
          foreground: ft("builtin"),
        },
      },
      {
        scope: ["constant.language.boolean", "constant.language"],
        settings: {
          foreground: ft("boolean"),
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: primary,
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: ft("orange"),
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: primary,
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: ft("interface"),
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground,
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: primary,
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          "constant.other.reference.link",
          "string.other.link",
          "punctuation.definition.string.begin.markdown",
          "punctuation.definition.string.end.markdown",
        ],
        settings: {
          foreground: ft("string"),
        },
      },
      {
        scope: ["markup.underline.link.markdown"],
        settings: {
          foreground: secondaryForeground,
          fontStyle: "underline",
        },
      },
      {
        scope: ["type.identifier"],
        settings: {
          foreground: ft("class"),
        },
      },
      {
        scope: ["entity.other.attribute-name.html.vue"],
        settings: {
          foreground: ft("function"),
        },
      },
      {
        scope: ["invalid.illegal.unrecognized-tag.html"],
        settings: {
          fontStyle: "normal",
        },
      },
    ],
    rules: [],
  };

  // monaco rules
  const rules: any[] = [];

  theme.tokenColors.forEach(({ scope, settings }: any) => {
    for (const s of toArray(scope)) {
      rules.push({
        token: s,
        foreground: settings.foreground?.replace("#", ""),
      });
    }
  });

  theme.rules = rules;

  return theme;
}
