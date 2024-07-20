---
title: 'Tips & Tricks'
layout: page
order: 5
---
## Contents

  1. [Command Line Options](#command-line-options)
  2. [Keyboard Shortcuts](#keyboard-shortcuts)
  3. [Command Variables](#command-variables)
  4. [GSettings](#gsettings) 
      1. [Changing the IP and Hostname Used to Check Your Internet Connectivity](#change-internet-check-ip-hostname)
      2. [Setting a Dynamic Nickname](#set-dynamic-nick)
      3. [Customizing the Network List](#customize-network-list)


<h2 id="command-line-options">Command Line Options{% include anchor.html slug='command-line-options' %}</h2>
<p>Usage: <b>haguichi [options]</b></p>
<table>
  <tr>
    <td>
      <code>-h</code>, <code>--help</code>
    </td>
    <td>
      Show command line help and exit
    </td>
  </tr>
  <tr>
    <td>
      <code>-v</code>, <code>--version</code>
    </td>
    <td>
      Show version number and exit
    </td>
  </tr>
  <tr>
    <td>
      <code>-d</code>, <code>--debug</code>
    </td>
    <td>
      Print debug messages
    </td>
  </tr>
  <tr>
    <td>
      <code>-b</code>, <code>--background</code>
    </td>
    <td>
      Run in background
    </td>
  </tr>
  <tr>
    <td>
      <code>--demo</code>
    </td>
    <td>
      Run in demo mode
    </td>
  </tr>
  <tr>
    <td>
      <code>--list=FILE</code>
    </td>
    <td>
      Use a text file as list in demo mode
    </td>
  </tr>
</table>

<h2 id="keyboard-shortcuts">Keyboard Shortcuts{% include anchor.html slug='keyboard-shortcuts' %}</h2>
<h3>General</h3>
<table>
  <tr>
    <td>
      <kbd>F1</kbd>
    </td>
    <td>
      Show help (opens the <a href="/faq/">FAQ</a> on this website)
    </td>
  </tr>
  <tr>
    <td>
      <kbd>F2</kbd>
    </td>
    <td>
      Show client information in sidebar
    </td>
  </tr>
  <tr>
    <td>
      <kbd>F10</kbd>
    </td>
    <td>
      Open menu
    </td>
  </tr>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>O</kbd>
    </td>
    <td>
      Connect
    </td>
  </tr>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>D</kbd>
    </td>
    <td>
      Disconnect
    </td>
  </tr>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>,</kbd>
    </td>
    <td>
      Show preferences
    </td>
  </tr>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>?</kbd>
    </td>
    <td>
      Show keyboard shortcuts
    </td>
  </tr>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>Q</kbd>
    </td>
    <td>
      Quit the application
    </td>
  </tr>
</table>
<h3>Network List</h3>
<table>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>J</kbd>
    </td>
    <td>
      Join a network
    </td>
  </tr>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>N</kbd>
    </td>
    <td>
      Create a network
    </td>
  </tr>
  <tr>
    <td>
      <kbd>F5</kbd> <em>or</em> <span style="white-space: nowrap;"><kbd>Ctrl</kbd>+<kbd>R</kbd></span>
    </td>
    <td>
      Refresh the network list
    </td>
  </tr>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>F</kbd>
    </td>
    <td>
      Search the network list
    </td>
  </tr>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>M</kbd>
    </td>
    <td>
      Toggle show/hide offline members
    </td>
  </tr>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>[</kbd>
    </td>
    <td>
      Expand all networks
    </td>
  </tr>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>]</kbd>
    </td>
    <td>
      Collapse all networks
    </td>
  </tr>
  <tr>
    <td>
      <kbd>Ctrl</kbd>+<kbd>1</kbd> <em>to</em> <kbd>Ctrl</kbd>+<kbd>9</kbd>
    </td>
    <td>
      Execute available commands by corresponding number
    </td>
  </tr>
</table>

<h2 id="command-variables">Command Variables{% include anchor.html slug='command-variables' %}</h2>
<table>
  <tr>
    <td>
      <code>%ID</code>
    </td>
    <td>
      Client ID
    </td>
  </tr>
  <tr>
    <td>
      <code>%N</code>
    </td>
    <td>
      Nickname
    </td>
  </tr>
  <tr>
    <td>
      <code>%A</code>
    </td>
    <td>
      Address
    </td>
  </tr>
  <tr>
    <td>
      <code>%TERMINAL</code>
    </td>
    <td>
      Terminal emulator
    </td>
  </tr>
  <tr>
    <td>
      <code>%FILEMANAGER</code>
    </td>
    <td>
      File manager
    </td>
  </tr>
  <tr>
    <td>
      <code>%REMOTEDESKTOP</code>
    </td>
    <td>
      Remote desktop viewer
    </td>
  </tr>
</table>

<h2 id="gsettings">GSettings{% include anchor.html slug='gsettings' %}</h2>
<img class="alignright" src="/resources/dconf-editor.png" alt="Dconf Editor" width="415" height="300" />Haguichi stores your preferences (nickname, commands, etc) using GSettings. Most values can be controlled from the preferences dialog or other user interface elements. However, there are some advanced values that can only be changed using _Dconf Editor_ or via _gsettings_ command.

<h3 id="change-internet-check-ip-hostname">Changing the IP and Hostname Used to Check Your Internet Connectivity{% include anchor.html slug='change-internet-check-ip-hostname' %}</h3>
Afraid of Google following your each and every virtual footstep? Living behind the great firewall of China? Know a faster (yet reliable) server to ping? No problem, changing these addresses is easier than ever!

For example, to change the default IP value of 8.8.8.8 (Google DNS) to 208.67.222.222 (OpenDNS):
  
<code class="user clipboard">gsettings set com.github.ztefn.haguichi.config check-internet-ip 208.67.222.222</code>

For example, to change the default hostname value of www.google.com to www.amazon.com:
  
<code class="user clipboard">gsettings set com.github.ztefn.haguichi.config check-internet-hostname www.amazon.com</code>

Keep in mind that Haguichi checks internet connectivity by pinging the IP first. Only in case this fails, it will try to resolve the hostname.

<h3 id="set-dynamic-nick">Setting a Dynamic Nickname{% include anchor.html slug='set-dynamic-nick' %}</h3>
The nickname Haguichi gives to the client can be set to a dynamic environment variable. In fact the default value is one, namely your username. These variables can be used within the &#8220;Change Nick&#8221; dialog too. But let&#8217;s keep focus on GSettings. Here&#8217;s an example to set the nickname to your real name:
  
<code class="user clipboard">gsettings set com.github.ztefn.haguichi.config nickname %REALNAME</code>

All available variables are:

<table>
  <tr>
    <td>
      <code>%USERNAME</code>
    </td>
    <td>
      Your username, for example: <b>rms</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>%REALNAME</code>
    </td>
    <td>
      Your real name, for example: <b>Richard M. Stallman</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>%HOSTNAME</code>
    </td>
    <td>
      Your pc&#8217;s hostname, for example: <b>thinkpad-x60</b>
    </td>
  </tr>
</table>

<h3 id="customize-network-list">Customizing the Network List{% include anchor.html slug='customize-network-list' %}</h3>
The possibilities on how to display the members in your network list are endless, because it’s template based. There are two templates, <b>member-template</b> and <b>network-template</b>. For markup you can use <a href="https://docs.gtk.org/Pango/pango_markup.html#pango-markup" target="_blank">Pango</a> (HTML like) syntax and for linebreaks simply use <strong>&lt;br&gt;</strong>. All available variables are:

#### Network

<table>
  <tr>
    <td>
      <code>%ID</code>
    </td>
    <td>
      Network ID
    </td>
  </tr>
  <tr>
    <td>
      <code>%N</code>
    </td>
    <td>
      Name
    </td>
  </tr>
  <tr>
    <td>
      <code>%S</code>
    </td>
    <td>
      Status (as text)
    </td>
  </tr>
  <tr>
    <td>
      <code>%T</code>
    </td>
    <td>
      Total member count
    </td>
  </tr>
  <tr>
    <td>
      <code>%O</code>
    </td>
    <td>
      Online member count
    </td>
  </tr>
  <tr>
    <td>
      <code>%CAP</code>
    </td>
    <td>
      Capacity
    </td>
  </tr>
  <tr>
    <td>
      <code>%*</code> <em>or</em> <code>%_*</code> <em>or</em> <code>%*_</code>
    </td>
    <td>
      Adds a star for client owned networks (the underscore indicates the position of a blank space)
    </td>
  </tr>
</table>

#### Member

<table>
  <tr>
    <td>
      <code>%ID</code>
    </td>
    <td>
      Client ID
    </td>
  </tr>
  <tr>
    <td>
      <code>%N</code>
    </td>
    <td>
      Nickname
    </td>
  </tr>
  <tr>
    <td>
      <code>%S</code>
    </td>
    <td>
      Status (as text)
    </td>
  </tr>
  <tr>
    <td>
      <code>%A</code>
    </td>
    <td>
      Address (both IPv4 and IPv6 if available, separated by a forward slash)
    </td>
  </tr>
  <tr>
    <td>
      <code>%IP4</code>
    </td>
    <td>
      IPv4 address
    </td>
  </tr>
  <tr>
    <td>
      <code>%IP6</code>
    </td>
    <td>
      IPv6 address
    </td>
  </tr>
  <tr>
    <td>
      <code>%TUN</code>
    </td>
    <td>
      Tunnel
    </td>
  </tr>
  <tr>
    <td>
      <code>%CX</code>
    </td>
    <td>
      Connection type
    </td>
  </tr>
  <tr>
    <td>
      <code>%*</code> <em>or</em> <code>%_*</code> <em>or</em> <code>%*_</code>
    </td>
    <td>
      Adds a star if the member is the owner of the network (the underscore indicates the position of a blank space)
    </td>
  </tr>
</table>
