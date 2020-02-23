package top.mihile.duanlianbang.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Mihile azuretodd@foxmail.com
 * @date 0212020/2/21
 */
@RestController("/test")
public class TestController {

    @GetMapping
    public String test(){
        return "test get success";
    }

    @PostMapping("/testPost")
    public String testPost(@RequestBody String data){
        System.out.println(data);
        return data+"/asdf";
    }
}
