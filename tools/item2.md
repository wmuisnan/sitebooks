# ITEM2

## Text Selection
1. `cmd-f` 输入查找字符
2. 按`tab` 往下复制
3. `shift-tab`往前复制

每次最多复制一行

## 分屏
切分

1. `cmd-d` 竖分
2. `cmd-shift-d` 横分

切换

1. `cmd-opt-arrow` 
2. ` cmd-[`、`cmd-]`

最大化

`cmd-shift-enter`, 再按一次恢复

## 保存标记／跳往标记
保存 `cmd-shift-M`

跳往 `cmd-shift-J`

## Regular Expression Search

When you open the find field (cmd-f) there is a down-arrow on the left of the field by the magnifying glass. Clicking it opens a menu of options in which you can enable regular expression search. The ICU syntax is used.

## 自动补全

窗口出现的任何文本都可被自动补全 ` cmd - ;`

## 粘贴历史
在 iTerm2 里复制或粘贴过的文本都会添加到它的历史记录中。 `cmd-shift-H` 可以获取记录， `Preferences > General > Save copy/paste history to disk` 可将记录添加到硬盘里。

## 即刻回放

`cmd-opt-B` 可复现最近出现在屏幕上的内容

处于回放模式中，可以用左右箭头键选择播放内容

`Esc` 推出此模式

每个对话默认分配4M存储空间。这个值可以在 `Preferences > General > Instant Replay uses __ MB ` 修改

## 全屏

`cmd-enter` 进入全屏。这种状态会取消透明背景（如果有）。恢复透明效果可用 `cmd-U` （全屏下好像也没啥效果）

## 焦点跟随鼠标

` Preferences > Pointer > Focus follows mouse. ` 只对`iTerm2`窗口有用

## 智能选择

Performing a quad-click does a "smart selection," which selects text under the pointer in a way appropriate to its content

## Triggers
Triggers are user-configurable regular expressions with associated actions that run when text is received that matches the regex. Actions include highlighting the matching text, showing an alert, sending text back, and more.

One advanced use of a trigger is to capture output matching a regex and display just those matching lines in the toolbelt. For example, you could create a trigger that matches compiler errors. When you run Make the errors will appear on the side of your window and you can click each to jump right to it. More information is available at the Captured Output manual.

## 取消关闭

如果无意中关闭了对话窗口，五秒(默认值, 可以在`configurable in Preferences > Profiles > Session` 修改)内输入`Cmd-Z`可以undo








