import { Box, Button, Container, Link, SpaceBetween } from "@cloudscape-design/components";

function ProductCard({
  title,
  logo,
  description,
  active,
  link
}: {
  title: string;
  logo: string;
  description: string;
  active: boolean;
  link?: string;
}) {
  return (
    <li className="product-cards-list-item" aria-label={title}>
      <Container>
        <img src={logo} alt={`${title} logo`} width="50" height="50" />
        <SpaceBetween direction="vertical" size="s">
          <SpaceBetween direction="vertical" size="xxs">
            <Box variant="h3">
              <Link fontSize="inherit">{title}</Link>
            </Box>
          </SpaceBetween>
          <Box variant="p">{description}</Box>
          {active &&
            <Button ariaLabel={`Go to app`} href={link}>Go to app</Button>
          } 
          {!active &&
            <Button
              disabled
              disabledReason="Unavailable for current demo"
              variant="primary"
            >Go to app</Button>
          }
          <Box variant="p"><br/></Box>
        </SpaceBetween>
      </Container>
      <br/>
    </li>
  );
}

export default ProductCard;