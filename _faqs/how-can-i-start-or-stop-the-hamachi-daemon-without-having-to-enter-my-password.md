---
title: How can I start the Hamachi service without having to enter my password each time?
order: 6
---
If you run a distro that uses systemd, you can start the Hamachi service automatically on boot. To do this, execute the following command in a terminal as root:<br>
<code class="root clipboard">systemctl enable logmein-hamachi</code>

Or as super user:<br>
<code class="user clipboard">sudo systemctl enable logmein-hamachi</code>
