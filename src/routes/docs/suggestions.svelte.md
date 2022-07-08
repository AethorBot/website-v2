---
title: Suggestions
desc: Info about how to use suggestions
published: true
---

you can set the suggestions channel using `/setup create suggestion:#suggestion denied:#denied accepted:#accepted`

after that sending messages in the suggestions channel will trigger the creation of a suggestion

![suggestions.png](/assets/suggestions.png)

## useful things to know

Aethor makes use of slashcommand permissions you can manage those permissions in the `guild settings -> integration -> Aethor` menu. Make a suggestions role for example and give that role access to all suggestion related commands.

By default the required permissions to delete and accept suggestions is manage messages.

## Managing suggestions

The 2 main commands for managing suggestions are `suggestion-deny` and `suggestion-accept` these 2 commands can be used to send the suggestions to a different channel such as the denied channel and this will end the voting on the suggestions too!

| delete                        | accept                        | restore                        |
| ----------------------------- | ----------------------------- | ------------------------------ |
| ![delete](/assets/delete.png) | ![delete](/assets/accept.png) | ![delete](/assets/restore.png) |
