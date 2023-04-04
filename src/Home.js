import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <Container>
      <br/>
      <h1>Root of Equation</h1>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Graphical Method</Card.Title>
              <Card.Text>Graphical methods are useful aids to portray the results of formal.</Card.Text>
              <Link to="/Graphical" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Bisection Method</Card.Title>
              <Card.Text>The bisection method is used to find the roots of a polynomial equation.</Card.Text>
              <Link to="/Bisection" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>False Position Method</Card.Title>
              <Card.Text>The false position method is a very old method for solving an equation.</Card.Text>
              <Link to="/FalsePosition" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>One Point Iteration Method</Card.Title>
              <Card.Text>Fixed-point iterations are a discrete dynamical system on one variable.</Card.Text>
              <Link to="/OnePoint" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Newton-Raphson Method</Card.Title>
              <Card.Text>Newton-Raphson Method is a root-finding algorithm. </Card.Text>
              <Link to="/NewtonRape" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Secant Method</Card.Title>
              <Card.Text>Secant Method is a root-finding procedure that uses a series of roots.</Card.Text>
              <Link to="/Secant" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <br/>
      <h1>Linear Algebraic</h1>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/Graphical" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/Bisection" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/FalsePosition" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/Graphical" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/Bisection" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/FalsePosition" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/Graphical" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/Bisection" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/FalsePosition" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <br/>
      <h1>Interpolation</h1>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/Graphical" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/Bisection" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/FalsePosition" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <h1>Regression</h1>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/Graphical" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/Bisection" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Link to="/FalsePosition" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <h1>Integration</h1>
      <Row>
        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Composite Trapezoidal Rule</Card.Title>
              <Card.Text></Card.Text>
              <Link to="/ComTrap" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{padding:20}}>
            <Card.Body>
              <Card.Img variant='top' src='https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs2/247886334/original/d02b921cea725ac376e506e3ba1e5310686f0b96.png' />
              <br/><br/>
              <Card.Title>Composite Simpson's Rule</Card.Title>
              <Card.Text></Card.Text>
              <Link to="/ComSim" >
                <Button variant='warning'>
                  Do the Result
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        
      </Row>
    </Container>
  )
}
