---
title: mac常用命令
---



```yaml
- name: mac
  url: https://saurabhs.org/advanced-macos-commands
  commands:
    - ["launchctl list", "查看自启的services和process(通常 | grep来搜索 想要查找的计划任务)"]
    - ["pmset -g", "打印所有可用的电源配置信息"]
    - ["pmset -g | grep hibernatemode", "hibernate(睡眠)和sleep(休眠)的区别在于内存是否供电，睡眠状态内存不供电不工作，内存数据落盘，休眠则内存继续工作；唤醒方式也不同，睡眠模式需要电源键启动，休眠模式通过“键鼠等输入设备”即可唤醒）。0，掉电非常严重；3，掉电一般严重；25，那掉电就会更少一些。"]
    - ["pmset repeat wakeorpoweron MTWRFSU 5:00:00 shutdown MTWRFSU 22:00:00", "pmset [repeat, schedule] [sleep, wake, poweron, shutdown, wakeorpoweron] [<MTWRFSU> <date/time>]"]
    - ["pmset -g sched", "查看crontab的电源计划"]
    - ["pmset displaysleepnow", "立即使显示器进入睡眠状态，而不使系统的其余部分进入睡眠状态"]
    - ["pmset sleepnow", "立即使整个系统进入睡眠状态"]
    - ["pmset -a disablesleep 1", "作用为防止系统休眠；注意，输入这条指令后MacBook不会进入休眠状态"]
    - ["pmset -a disablesleep 0", "恢复，上面命令的相反"]
    - ["caffeinate", "Running caffeinate with no flags or arguments prevents your Mac from going to sleep as long as the command continues to run."]

    - ["pbcopy"]
    - ["pbpaste"]
    - ["sips"]
    - ["textutil"]
    - ["mdfind"]
    - ["mdls"]
    - ["screencapture"]
    - ["taskpolicy"]
    - ["say", "announces the given message, just for English."]
    - ["networksetup"]

```