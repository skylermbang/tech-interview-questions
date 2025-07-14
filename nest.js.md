❓1. How does NestJS organize its code?
✅ Answer:

NestJS uses a modular structure — with Modules, Controllers, and Providers (like Services).
 Each module encapsulates related functionality. 
 For example, I had an OpenAiModule that included a 
 controller to handle incoming prompts and 
 a service to call the OpenAI API.

❓2. What is the role of Controllers and Services in NestJS?
✅ Answer:

Controllers handle HTTP requests and route them to the appropriate logic.
 Services contain the actual business logic. 
 I used a Controller to receive a prompt from the client and a 
 Service to call OpenAI's GPT model and return the result.

❓3. How do you manage environment variables in NestJS?
✅ Answer:

I used the dotenv package to load environment variables like the OpenAI API key. 
I called dotenv.config() at the top of my main.ts and openai.service.ts files,
 and accessed them with process.env.

❓4. How did you connect to an external API (OpenAI) in your project?
✅ Answer:

I used the official openai SDK.
 Since it requires fetch, and Node.js doesn’t include that natively,
  I patched globalThis.fetch using the undici package. 
  This let me use GPT-4o reliably inside my NestJS service.

❓5. What were some challenges you faced using NestJS with OpenAI?
✅ Answer:

At first, I had issues with missing fetch,
 invalid .env keys, and API quota. 
 I learned how to debug server logs, 
 patch fetch correctly, and set up billing to unlock real API usage. 
 Those lessons made me more confident working with external services and API error handling in NestJS.






 Dependency Injection (DI)
 It is design pattern where a class receive its dependencies from the outside rather than creating them itself.

 In nest JS , this is enabled by using @injectable() decorater
 make code eastier to manage ,test , scale


 Also in Spring(JAVA) or .NET Core(C#)


 Without DI (의존성 직접 생성)
```
const service = new MyService();

```
With DI (NestJS 방식)
```
@Injectable()
export class MyService {
  getHello() {
    return 'Hello!';
  }
}

@Controller()
export class MyController {
  constructor(private readonly myService: MyService) {}

  @Get()
  sayHello() {
    return this.myService.getHello();
  }
}
```

NestJS manages it automatically using a built-in IoC (Inversion of Control) container.
It will creat the Myservice instance and inject in to myController 

DI is a design pattern often used in OOP to make class relationships more flexible and testable.
