/* ASCII line-art / dot-matrix, rendered in <pre> with a monospace font. */

export const TUX_ASCII = String.raw`        .--"""--.
       /_       _\
      // \     / \\
      |\__\   /__/|
       \    Y    /
       /'---'---'\
      /           \
     (  .-""-.   )
     |  |    |   |
     |  |    |   |
      \  \__/   /
       '.____.'
`;

/* Happy Wojak — generated from the real imgflip template image,
   raster-to-ASCII via Gaussian blur + thresholded shade ramp.
   Renders cleanly in any monospace font. */
export const HAPPY_WOJAK = [
  "                        ░░░        ░░░                  ",
  "                   ░░                  ░░░              ",
  "                ░░                         ░▓           ",
  "              ▓░                             ▓          ",
  "            ▓░                                █         ",
  "           █                                   █        ",
  "          ░▓                                   █        ",
  "          █                                     █       ",
  "         ▓░                                     █       ",
  "         █                                      ▓       ",
  "        ▓░                                      ▓       ",
  "         ▓  ███ ░         ▓████░█               █       ",
  "         █  ███░▓░        ▓███▓                ▓░       ",
  "        █                                      █        ",
  "       ░▓         █                    █      █         ",
  "        █       ▓░                     █    ░▓          ",
  "        ▓▓      █       ░█   ░        ▓░    █           ",
  "         ▓▓      ▓   ░  ░░  ██▓       ▓    ░░           ",
  "          ░▓    ▓██▓    ░▓████      ░▓     ░░           ",
  "            ▓    ████▓███████▓    ░░       ░▓           ",
  "            █     ▓██ ████▓█░   ▓░    ░     █           ",
  "             ░▓     ░▓  ░    ░▓             ░▓          ",
  "               ▓░          ░░                █░         ",
  "                    █░   ░             ░▓     ▓░        ",
  "                   ░▓                    ▓░     █▓      ",
].join("\n");
