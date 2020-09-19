---
title: Why is Haguichi asking me to "configure" Hamachi before I can connect?
order: 5
---
By default Hamachi can only be controlled by the root user on your system. To allow other users (such as yourself) to control Hamachi you need to add the line <code style="white-space: nowrap;">Ipc.User username</code> to the file <b>/var/lib/logmein-hamachi/h2-engine-override.cfg</b> where <i>username</i> is your actual username. If you click the "Configure" button then Haguichi will add this line for you. However you do need to have (root or super user) privileges to be able to do so.
