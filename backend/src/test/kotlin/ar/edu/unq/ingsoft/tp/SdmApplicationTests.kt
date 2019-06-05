package ar.edu.unq.ingsoft.tp

import junit.framework.Assert.assertEquals
import junit.framework.Assert.assertNotNull
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.http.HttpStatus
import org.springframework.test.context.junit4.SpringRunner

@RunWith(SpringRunner::class)
@SpringBootTest(classes = arrayOf(SdmApplication::class),
		webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class SdmApplicationTests {


	@Autowired
	lateinit var testRestTemplate: TestRestTemplate


	@Test
	fun whenCalled_shouldReturnHelloService() {
		var result = testRestTemplate
				// ...
				.getForEntity("/hosts/hello-service", String::class.java)

		assertNotNull(result)
		assertEquals(HttpStatus.OK, result?.statusCode)
		assertEquals("hello service", result?.body)
	}
}


