import { extendTheme } from "@chakra-ui/react";
import "@fontsource/nunito";

const fonts = {
  body: "nunito",
  heading: "nunito",
};

const components = {
  Input: {
    variants: {
      flushed: {
        bg: "transparent",
      },
    },
    defaultProps: {
      size: "sm",
      variant: "flushed",
      focusBorderColor: "black",
    },
  },
  Textarea: {
    variants: {
      flushed: {
        bg: "transparent",
      },
    },
    defaultProps: {
      size: "sm",
      variant: "flushed",
      focusBorderColor: "black",
    },
  },
  Text: {
    baseStyle: {
      color: "white",
    },
  },
  Heading: {
    baseStyle: {
      color: "black",
    },
    sizes: {},
    defaultProps: {
      size: "xl",
    },
  },
  Button: {
    baseStyle: {
      fontWeight: "400",
      borderRadius: 3,
    },
    variants: {
      brand: {
        bg: "gray.100",
        _hover: {
          bg: "brand.400",
          textColor: "white",
        },
        _active: {
          bg: "brand.600",
          textColor: "white",
        },
      },
    },
    sizes: {
      md: {
        fontSize: "sm",
      },
    },
    defaultProps: {},
  },
};

export const theme = extendTheme({
  fonts: fonts,
  components: components,
});
